// API route for handling service booking form submissions

export async function POST(request) {
  try {
    const formData = await request.json()
    
    // Validate required fields
    const { fullName, email, phone, serviceType } = formData
    
    if (!fullName || !email || !phone || !serviceType) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    // Get the CMS backend URL
    const cmsUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://lambton-backend.vercel.app'
    
    // Prepare the data for Payload CMS
    const bookingData = {
      fullName,
      email,
      phone,
      serviceType,
      status: 'pending', // Default status
      submittedAt: new Date().toISOString(),
    }
    
    // Send data to Payload CMS
    const cmsResponse = await fetch(`${cmsUrl}/api/service-bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
    
    if (!cmsResponse.ok) {
      console.error('CMS Error:', await cmsResponse.text())
      return Response.json(
        { error: 'Failed to save booking to CMS' },
        { status: 500 }
      )
    }
    
    const savedBooking = await cmsResponse.json()
    
    return Response.json(
      { 
        success: true, 
        message: 'Booking submitted successfully',
        bookingId: savedBooking.id 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Service booking API error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}