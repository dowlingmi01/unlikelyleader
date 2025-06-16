// pages/api/generate-pdf.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      name = 'Reader',
      archetype,
      description,
      strengths = [],
      watchOuts = [],
      actions = [],
      affirmations = [],
    } = req.body;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const { width, height } = page.getSize();

    let y = height - 50;
    const lineHeight = 22;
    const marginLeft = 50;
    const green = rgb(0.105, 0.682, 0.404); // #1bae67

    function drawSectionTitle(title: string) {
      y -= lineHeight * 1.5;
      page.drawText(title, { x: marginLeft, y, size: 16, font: boldFont, color: green });
    }

    function drawList(items: string[]) {
      items.forEach((item) => {
        y -= lineHeight;
        page.drawText(`• ${item}`, { x: marginLeft + 20, y, size: 12, font });
      });
    }

    function drawParagraph(text: string) {
      const words = text.split(' ');
      let line = '';
      for (const word of words) {
        const testLine = line + word + ' ';
        const testWidth = font.widthOfTextAtSize(testLine, 12);
        if (testWidth > 480) {
          y -= lineHeight;
          page.drawText(line, { x: marginLeft, y, size: 12, font });
          line = word + ' ';
        } else {
          line = testLine;
        }
      }
      if (line) {
        y -= lineHeight;
        page.drawText(line, { x: marginLeft, y, size: 12, font });
      }
    }

    // Title
    page.drawText('Unlikely Leader Archetype Report', {
      x: marginLeft,
      y,
      size: 20,
      font: boldFont,
      color: green,
    });

    // Metadata
    y -= lineHeight * 2;
    page.drawText(`Name: ${name}`, { x: marginLeft, y, size: 14, font });
    y -= lineHeight;
    page.drawText(`Archetype: ${archetype}`, { x: marginLeft, y, size: 14, font });

    // Description
    drawSectionTitle('Description');
    drawParagraph(description);

    // Strengths
    drawSectionTitle('Key Strengths');
    drawList(strengths);

    // Watch-Outs
    drawSectionTitle('Watch-Out Fors');
    drawList(watchOuts);

    // Actions
    drawSectionTitle('Key Actions to Take');
    drawList(actions);

    // Affirmations
    drawSectionTitle('Affirmation');
    drawList(affirmations);

    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=unlikely-leader.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}

