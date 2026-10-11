const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

const app = express();
const PORT = process.env.PORT || 3000;
const SAVE_DIR = '/sdcard/Download/MediaDownloader';

fs.ensureDirSync(SAVE_DIR);

app.use(cors());
app.use(express.json());

// تقديم ملف الواجهة
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/download', (req, res) => {
    let { url } = req.body;
    if (!url) {
        return res.status(400).json({ status: false, messa>
    }

    url = url.trim().replace(/^\/+/, '');

    const command = `yt-dlp --no-warnings -f "bv*+ba/b" -->

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Download error:', stderr || err>
            return res.status(500).json({
                status: false,
                message: 'تعذر التنزيل، تأكد من صحة الرابط>
            });
        }

        return res.json({
            status: true,
            message: 'تم التنزيل بنجاح!',
            path: SAVE_DIR
        });
    });
});

app.listen(PORT, () => {
    console.log('\n=======================================>
    console.log('🚀 السيرفر يعمل بنجاح ومستعد للتنزيل!');
    console.log(`🌐 افتح الرابط التالي في المتصفح: http://>
    console.log('=========================================>
});
  
