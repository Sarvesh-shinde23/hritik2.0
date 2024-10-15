import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Destructure the form fields from the request body
    const { firstName, lastName, address, phone, message, agreement } = req.body;

    // Add server-side validation if necessary
    if (!firstName || !lastName || !phone || !message || !agreement) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Send the form data to an external service or store it in a database
      // Example: saving to a database (mocked for now)
      
      // Simulate a successful form submission response
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send message.' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
