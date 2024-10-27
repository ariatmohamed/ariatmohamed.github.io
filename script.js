document.getElementById('processButton').addEventListener('click', function() {
    const videoInput = document.getElementById('videoUpload');
    const videoFile = videoInput.files[0];

    if (videoFile) {
        // هنا يمكنك إضافة كود لتحويل الفيديو إلى نص وترجمته.
        alert("تم رفع الفيديو: " + videoFile.name);
        // أضف الكود الخاص بالتحويل والترجمة هنا.
    } else {
        alert("يرجى رفع ملف فيديو.");
    }
});
