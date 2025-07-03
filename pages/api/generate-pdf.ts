// pages/api/generate-pdf.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

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

    // ✅ Step 1: Load the image from /public/images
    const logoPath = path.resolve('./public/images/UL-Logo.jpg');
    const logoImageBytes = fs.readFileSync(logoPath);
    const logoImage = await pdfDoc.embedPng(logoImageBytes); // use embedJpg if it's a JPG
    const logoDims = logoImage.scale(0.1); // adjust scale as needed

    // ✅ Step 2: Draw the image at the top center
    page.drawImage(logoImage, {
      x: width / 2 - logoDims.width / 2,
      y: height - logoDims.height - 40,
      width: logoDims.width,
      height: logoDims.height,
    });

    let y = height - logoDims.height - 70; // Adjust text start below the logo
    const lineHeight = 22;
    const marginLeft = 50;
    const green = rgb(0.105, 0.682, 0.404); // #1bae67

    function drawSectionTitle(title: string) {
      y -= lineHeight * 1.5;
      page.drawText(title, {
        x: marginLeft,
        y,
        size: 14,
        font: boldFont,
        color: green,
      });
      y -= lineHeight * 0.5;
    }

    function drawList(items: string[]) {
      for (const item of items) {
        y -= lineHeight;
        page.drawText(`• ${item}`, {
          x: marginLeft + 10,
          y,
          size: 12,
          font,
          color: rgb(0.2, 0.2, 0.2),
        });
      }
      y -= lineHeight;
    }

    page.drawText(archetype, {
      x: marginLeft,
      y,
      size: 20,
      font: boldFont,
      color: green,
    });
    y -= lineHeight * 1.5;
    page.drawText(description, {
      x: marginLeft,
      y,
      size: 12,
      font,
      color: rgb(0.2, 0.2, 0.2),
      maxWidth: width - 2 * marginLeft,
    });

    y -= lineHeight * 2;
    drawSectionTitle('Key Strengths');
    drawList(strengths);

    drawSectionTitle('Watch-Outs');
    drawList(watchOuts);

    drawSectionTitle('Key Actions to Take');
    drawList(actions);

    drawSectionTitle('Affirmations');
    drawList(affirmations);

    const pdfBytes = await pdfDoc.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=leadership-archetype.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
