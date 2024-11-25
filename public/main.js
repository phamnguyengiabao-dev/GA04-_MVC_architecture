document.addEventListener('DOMContentLoaded', () => {
    console.log('Trang đã được tải!');
  
    // Thay đổi nội dung tiêu đề khi trang được tải
    const title = document.querySelector('h1');
    if (title) {
      title.innerText = 'Chào mừng bạn đến với trang web của tôi!';
    }
  
    // Sự kiện click vào logo để hiển thị thông báo
    const logo = document.querySelector('img[alt="Logo"]');
    if (logo) {
      logo.addEventListener('click', () => {
        alert('Bạn vừa nhấn vào logo!');
      });
    }
  
    // Sự kiện click vào banner để hiển thị thông tin
    const banner = document.querySelector('img[alt="Banner"]');
    if (banner) {
      banner.addEventListener('click', () => {
        alert('Đây là banner chính của trang!');
      });
    }
  });
  