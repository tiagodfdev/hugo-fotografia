import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const apiKey = process.env.SENDGRID_API_KEY

const sendGridAPI = async ({ name, email, phone, date, city, place, message }) => {
    const res = await fetch(SENDGRID_API, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email:"hugodemetriofotografia@gmail.com"
                }
              ],
              subject: `Nova mensagem de ${name} (Site)`
            }
          ],
          from: {
            email: "hugodemetriofotografia@gmail.com",
            name: 'Email Hugo-Fotografia'
          },
          reply_to: {
            email: email,
            name: name
          },
          content: [
            {
              type: 'text/html',
              value: `Solicitante: ${name} <br/>
              E-mail: ${email} <br/>
              Telefone: ${phone} <br/>
              Data do evento: ${date} <br/>
              Cidade: ${city} <br/>
              Local do evento: ${place} <br/>
              Mensagem: ${message}`
            }
          ]
        })
        
    });
    return res
}
module.exports = async (req, res) => {
    if(req.method === "POST") {
      const { name, email, phone, date, city, place, message } = req.body;
      const responseSendGridAPI = await sendGridAPI({ name, email, phone, date, city, place, message });
      return res.status(responseSendGridAPI.status).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}