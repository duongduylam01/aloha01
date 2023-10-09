import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  link: any = {
    facebook: 'https://www.facebook.com/Alohafloratiemhoacuanang',
    instagram: 'https://www.instagram.com/alohaflora_tiemhoacuanang',
    phone: '#',
  }
  zodiacAndFlower: any = [
    {
      id: 0,
      name: 'Cung Bạch Dương',
      note: 'Bạch Dương được biết đến với tính cách tự tin, năng động và khá bốc đồng. Bạn thường là người dẫn đầu trong các chuyến phiêu lưu và những trải nghiệm mới lạ. Tương ứng với năng lượng dồi dào và sự nhiệt tình của Bạch Dương là những bông hoa ...',
      imageURL: 'assets/img/zodiac-tulip.png',
      mainColor: '#ea9999'
    },
    {
      id: 1,
      name: 'Cung Kim Ngưu',
      note: 'Kim Ngưu là người kiên cường và nhẫn nại. Do đó, những khó khăn, thử thách không thể nào làm khó được bạn. Cung hoàng đạo này thường hướng đến sự tinh tế và tỉ mỉ đến từng chi tiết. Bạn yêu cái đẹp và sự bình yên nhẹ nhàng. Mặc dù ...',
      imageURL: 'assets/img/zodiac-poppies.png',
      mainColor: '#bb1a1a'
    },
    {
      id: 2,
      name: 'Cung Song Tử',
      note: 'Trong mắt mọi người, Song tử luôn tràn đầy năng lượng và sự hứng khởi. Bạn cởi mở, hào phóng và luôn muốn chia sẻ những ý tưởng hay ho đến mọi người. Bạn là người quảng giao và có khả năng kết nối người khác. Tuy vậy ...',
      imageURL: 'assets/img/zodiac-lavender.png',
      mainColor: '#6518b1'
    },
    {
      id: 3,
      name: 'Cung Cự Giải',
      note: 'Cự Giải mỏng manh, nhạy cảm và tinh khiết như một cánh hồng trắng. Thế nhưng, bạn không hề ủy mị mà lại bản lĩnh, sắc bén như những chiếc gai. Ngoài khả năng tưởng tượng, Cự Giải còn là người biết lắng nghe và chia sẻ. Bạn thường cảm thấy an toàn và tin tưởng với những điều gần gũi, quen thuộc. Giống như hoa hồng trắng, Cự Giải thanh lịch, giản dị và được rất nhiều người yêu mến.',
      imageURL: 'assets/img/zodiac-white-rose.jpg',
      mainColor: '#8e8c2c'
    },
    {
      id: 4,
      name: 'Cung Sư Tử',
      note: 'Hoa hướng dương là biểu tượng của sự tươi vui và tích cực. Tương tự như loài hoa này, Sư Tử là người ấm áp, yêu đời và đầy lạc quan. Đứng trước những hoàn cảnh khó khăn, bạn không chùn bước mà dũng cảm đối diện để vượt qua. Bởi vì bạn luôn đặt niềm tin vào những điều tốt đẹp và may mắn. Sư Tử luôn nhìn về phía Mặt Trời, về những phước lành và niềm hạnh phúc trong tương lai.',
      imageURL: 'assets/img/zodiac-sunflower.png',
      mainColor: '#e78835'
    },
    {
      id: 5,
      name: 'Cung Xử Nữ',
      note: 'Xử Nữ có một lối sống bình dị như loài hoa cúc. Bạn là cung hoàng đạo vô cùng cẩn thận, siêng năng và cầu toàn. Mặc dù sở hữu kiến thức và sự hiểu biết sâu sắc về cuộc sống nhưng bạn luôn giữ thái độ khiêm tốn, chừng mực. Bạn nhẹ nhàng, từ tốn, đồng thời cũng rất cứng rắn và mạnh mẽ.',
      imageURL: 'assets/img/zodiac-daisy.png',
      mainColor: '#9a5c24'
    },
    {
      id: 6,
      name: 'Cung Thiên Bình',
      note: 'Trong cuộc sống, Thiên Bình luôn hướng đến sự cân bằng và hài hòa. Bạn không chỉ là mẫu người lãng mạn, bay bổng mà còn rất tốt bụng và ấm áp. Hoa cẩm tú cầu tượng trưng cho sự chân thành, tính cách chu đáo, nhiệt tình và nhẹ nhàng của Thiên Bình.',
      imageURL: 'assets/img/zodiac-hydrangea.png',
      mainColor: 'rgba(25,73,137,0.55)'
    },
    {
      id: 7,
      name: 'Cung Bọ Cạp',
      note: 'Sắc hoa mẫu đơn rực rỡ, nổi bật tượng trưng cho tính cách mạnh mẽ, kiên cường của Bọ Cạp. Bạn đầy mãnh liệt, đam mê, không điều gì có thể ngăn bước chân bạn đến những điều bạn hằng khao khát. Tuy nhiên, Bọ Cạp cũng là cung hoàng đạo khá nhạy cảm bởi bạn thường dễ bị tình cảm chi phối.',
      imageURL: 'assets/img/zodiac-peony.jpg',
      mainColor: '#dc6868'
    },
    {
      id: 8,
      name: 'Cung Nhân Mã',
      note: 'Hoa cẩm chướng đại diện cho “lửa” đam mê, nhiệt huyết và năng lượng tích cực. Nhân Mã là cung hoàng đạo đáng yêu, hài hước. Bạn luôn mang đến tiếng cười và niềm vui cho mọi người. Bên cạnh đó, bạn còn sở hữu tinh thần mạnh mẽ, độc lập và tư duy cởi mở. Vì vậy, khám phá và nhìn ngắm thế giới là điều mà Nhân Mã luôn muốn thực hiện.',
      imageURL: 'assets/img/zodiac-carnation.jpg',
      mainColor: '#ef2626'
    },
    {
      id: 9,
      name: 'Cung Ma Kết',
      note: 'Là một trong những cung hoàng đạo ổn định, nghiêm túc nhất, Ma Kết luôn sống kỷ luật, có trách nhiệm với bản thân và mọi người. Bạn nhận được rất nhiều sự tín nhiệm từ đồng nghiệp, bạn bè, người thân bởi thái độ chăm chỉ, cầu tiến. Thế nhưng, đôi khi bạn lại quá thực tế, lý trí, thậm chí là cứng nhắc. Điều này khiến Ma Kết gặp không ít khó khăn trong quá trình giao tiếp và làm việc.',
      imageURL: 'assets/img/zodiac-delphiniums.jpg',
      mainColor: '#1425a5'
    },
    {
      id: 10,
      name: 'Cung Bảo Bình',
      note: 'Bề ngoài, Bảo Bình có thể là một người lạnh lùng, ít nói. Thế nhưng, thực chất bạn lại rất thân thiện và dễ gần. Bảo Bình là cung hoàng đạo lập dị, khó hiểu, thậm chí đôi lúc bạn còn cảm thấy mâu thuẫn với chính mình. Tuy vậy, sau tất cả, Bảo Bình luôn tìm ra câu trả lời cho những thắc mắc một cách nhanh chóng, bởi vì bạn luôn ý thức được con đường mà mình đang đi.',
      imageURL: 'assets/img/zodiac-orchild.png',
      mainColor: '#000'
    },
    {
      id: 11,
      name: 'Cung Song Ngư',
      note: 'Song Ngư nổi tiếng là cung hoàng đạo hào sảng và giàu lòng trắc ẩn. Bạn sống thiên về tình cảm hơn là lý trí. Bạn yêu sự tự do, bay bổng và yêu cái đẹp. Do đó, nghệ thuật luôn là nguồn cảm hứng bất tận của bạn. Ngoài trái tim ấm áp, Song Ngư có khả năng thấu cảm rất tuyệt vời. Bạn rất giỏi trong việc chia sẻ và lắng nghe người khác.',
      imageURL: 'assets/img/zodiac-daffodils.jpg',
      mainColor: '#e0c614'
    },
  ]

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  onNavigateTo(link: string) {
    window.open(link);
  }

}
