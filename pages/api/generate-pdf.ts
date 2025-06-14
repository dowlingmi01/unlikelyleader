// pages/api/generate-pdf.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, archetype, affirmations = [] } = req.body;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { width, height } = page.getSize();

    let y = height - 50;
    const lineHeight = 30;

    page.drawText('Unlikely Leader Report', {
      x: 50,
      y,
      size: 24,
      font,
      color: rgb(0.1, 0.2, 0.6),
    });

    y -= lineHeight * 2;
    page.drawText(`Name: ${name}`, { x: 50, y, size: 16, font });

    y -= lineHeight;
    page.drawText(`Archetype: ${archetype}`, { x: 50, y, size: 16, font });

    y -= lineHeight * 2;
    page.drawText('Affirmations:', { x: 50, y, size: 16, font });

    affirmations.forEach((line: string) => {
      y -= lineHeight;
      page.drawText(`• ${line}`, { x: 70, y, size: 14, font });
    });

    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=unlikely-leader.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
