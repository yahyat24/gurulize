<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-47500K8E2H"></script> <script>   window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-47500K8E2H'); </script>

<!-- Google Tag Manager --> 
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-58GWFLFS');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58GWFLFS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<script src="/js/vendor/jquery-3.2.1.min.js?0907"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script>
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tagsParam = urlParams.get('tags');
    
    if (tagsParam) {
        $('div.coupon-use-btn a').each(function() {
            const $this = $(this);
            let href = $this.attr('href');
            
            if (href) {
                // Mevcut href'ye tags parametresini ekle
                const separator = href.includes('?') ? '&' : '?';
                $this.attr('href', href + separator + 'tags=' + encodeURIComponent(tagsParam));
            }
        });
    }


if(window.location.pathname == '/s/deneme-dersi'){

if(!$('body').hasClass('loggedIn')){

$('.page > .container').html(`<div class="alert alert-info"><div class="alert-wrapper"><div class="alert-icon"><div class="icon-box"><i class="fas fa-exclamation-circle"></i></div></div><div class="alert-txt"><p>Deneme dersinden faydalanabilmek için <strong><a href="/signup?return=/s/deneme-dersi">kayıt</a></strong> olmanız gerekmektedir. </p><p>Lütfen kayıt olduktan sonra tekrar deneyin !</p></div></div></div>`);

}else {
$('.page > .container').html(` <div class="fit-form-youtube"><div class="fit-form-con"><div class="fit-form-item"><div class="fit-form-items"><div class="fit-form-head"><h2 class="fit-h2 fit-color-1">Fit Kültür kamplarına katılmadan önce küçük bir ön izlemeye ne dersin?  
</h2></div></div><div class="fit-form-items fit-form-padding"><div class="fit-form-video"><div class="fit-form-play"><iframe width="1027" height="578" src="https://www.youtube.com/embed/s4BlPHvKYyk" title="Online Fitness Kampı - Deneme dersi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="fit-inst-bg fit-bg-turkuaz"></div></div><div class="fit-form-content"><div class="fit-form-col"><h5 class="fit-h5 fit-color-1">Fit Kültür kamplarında ay boyunca haftada 4 gün, 45 dakika canlı yayınlarla gerçekleştirilen derslere katılacaksın. </br></br>Peki bu canlı dersler nasıl  geçiyor?</br></br>Burada, seçtiğin kampın bir ders videosunu bulabilirsin.  Bu video, kampın eğitmen yaklaşımını, ders temposunu ve genel  atmosferini anlamanı sağlayacaktır.</h5></div></div></div><div class="fit-form-items"><div class="fit-form-content fit-form-padding"><h4 class="fit-h4 fit-color-1">Ders videosundan keyif aldıysan artık kampa katılmaya hazırsın.</br>
Kamplarda seni canlı derslerden çok daha fazlası bekliyor.</h4> <div class="fit-form-row fit-bg-turkuaz"><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kampının Telegram grubu üzerinden sürekli destek ve eğitmene erişim şansı.</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Seçtiğin kampa özel oluşturulan Telegram grubundan diğer katılımcılarla sürekli iletişim, motivasyon ve destek ortamı</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kaçırdığın canlı dersleri istediğin zaman izleyebilmen için kayıtlı ders videoları</h5></div></div><div class="fit-form-button"><a href="/paketler/?tags=online" class="fit-form-btn fit-button fit-bg-pink fit-color-2 fit-p fit-bold">Kamplara Katıl</a></div></div></div><div class="fit-form-items"></div><div class="fit-form-items"><div class="fit-faq-wp"><div class="fit-faq-container"><h2 class="fit-h2 fit-color-1">Sıkça Sorulan Sorular</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Deneme dersini izleyenlere özel indirim kuponunu nasıl kullanabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> İndirim kuponunu nasıl kullanacağını anlatan bu <a href="https://www.youtube.com/shorts/IxbZigClc3w" class="youtube-link">videoyu izleyebilirsin.</a> <span class="fit-bold">Kupon Kodun: DENEME10</span> </p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Kampı satın aldım, derslere nereden erişeceğim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"> <p>Yapılacak her canlı dersin linki Telegram grubundan katılımcılarla paylaşılacak. İletilen linke tıklaman yeterli. </p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Telegram grubuna nasıl katılacağım?  </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Kampı satın aldıktan sonra sana gönderilen e-postadaki butona tıklayarak Telegram grubuna katılabilirsin. Spam klasörünü de kontrol etmeyi unutma.</p></div><button id="accordion-button-4" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Sorularım var, size nasıl ulaşabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> Sorularınız için Whatsapp hattımıza mesaj gönderebilirsin. Aklındaki sorulara cevap vermek için buradayız.</p></div></div></div></div></div></div></div></div><div id="videoModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.7); justify-content:center; align-items:center;"><div style="position:relative; width:80%; max-width:800px;"><span id="closeModal" style="position:absolute; top:-30px; right:0; color:#fff; cursor:pointer; font-size:20px;">Kapat ✖</span><iframe width="100%" height="450" src="https://www.youtube.com/embed/IxbZigClc3w" title="Use of Discount Coupon." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div></div>`);

}


}

if(window.location.pathname == '/s/esneklik-deneme-dersi'){

if(!$('body').hasClass('loggedIn')){

$('.page > .container').html(`<div class="alert alert-info">Deneme dersinden faydalanabilmek için <strong><a href="/signup?return=/s/esneklik-deneme-dersi">kayıt</a></strong> olmanız gerekmektedir. Lütfen kayıt olduktan sonra tekrar deneyin !</div>`);

}else {
$('.page > .container').html(` <div class="fit-form-youtube"><div class="fit-form-con"><div class="fit-form-item"><div class="fit-form-items"><div class="fit-form-head"><h2 class="fit-h2 fit-color-1">Fit Kültür kamplarına katılmadan önce küçük bir ön izlemeye ne dersin?  
</h2></div></div><div class="fit-form-items fit-form-padding"><div class="fit-form-video"><div class="fit-form-play"><iframe width="1410" height="793" src="https://www.youtube.com/embed/10eT63uJkh4" title="Esneklik ve Mobilite - Deneme Dersi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="fit-inst-bg fit-bg-turkuaz"></div></div><div class="fit-form-content"><div class="fit-form-col"><h5 class="fit-h5 fit-color-1">Fit Kültür kamplarında ay boyunca haftada 4 gün, 45 dakika canlı yayınlarla gerçekleştirilen derslere katılacaksın. </br></br>Peki bu canlı dersler nasıl  geçiyor?</br></br>Burada, seçtiğin kampın bir ders videosunu bulabilirsin.  Bu video, kampın eğitmen yaklaşımını, ders temposunu ve genel  atmosferini anlamanı sağlayacaktır.</h5></div></div></div><div class="fit-form-items"><div class="fit-form-content fit-form-padding"><h4 class="fit-h4 fit-color-1">Ders videosundan keyif aldıysan artık kampa katılmaya hazırsın.</br>
Kamplarda seni canlı derslerden çok daha fazlası bekliyor.</h4> <div class="fit-form-row fit-bg-turkuaz"><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kampının Telegram grubu üzerinden sürekli destek ve eğitmene erişim şansı.</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Seçtiğin kampa özel oluşturulan Telegram grubundan diğer katılımcılarla sürekli iletişim, motivasyon ve destek ortamı</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kaçırdığın canlı dersleri istediğin zaman izleyebilmen için kayıtlı ders videoları</h5></div></div><div class="fit-form-button"><a href="/paketler/?tags=esneklik" class="fit-form-btn fit-button fit-bg-pink fit-color-2 fit-p fit-bold">Kamplara Katıl</a></div></div></div><div class="fit-form-items"></div><div class="fit-form-items"><div class="fit-faq-wp"><div class="fit-faq-container"><h2 class="fit-h2 fit-color-1">Sıkça Sorulan Sorular</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Deneme dersini izleyenlere özel indirim kuponunu nasıl kullanabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> İndirim kuponunu nasıl kullanacağını anlatan bu <a href="https://www.youtube.com/shorts/IxbZigClc3w" class="youtube-link">videoyu izleyebilirsin.</a> <span class="fit-bold">Kupon Kodun: DENEME10</span> </p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Kampı satın aldım, derslere nereden erişeceğim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"> <p>Yapılacak her canlı dersin linki Telegram grubundan katılımcılarla paylaşılacak. İletilen linke tıklaman yeterli. </p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Telegram grubuna nasıl katılacağım?  </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Kampı satın aldıktan sonra sana gönderilen e-postadaki butona tıklayarak Telegram grubuna katılabilirsin. Spam klasörünü de kontrol etmeyi unutma.</p></div><button id="accordion-button-4" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Sorularım var, size nasıl ulaşabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> Sorularınız için Whatsapp hattımıza mesaj gönderebilirsin. Aklındaki sorulara cevap vermek için buradayız.</p></div></div></div></div></div></div></div></div><div id="videoModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.7); justify-content:center; align-items:center;"><div style="position:relative; width:80%; max-width:800px;"><span id="closeModal" style="position:absolute; top:-30px; right:0; color:#fff; cursor:pointer; font-size:20px;">Kapat ✖</span><iframe width="100%" height="450" src="https://www.youtube.com/embed/IxbZigClc3w" title="Use of Discount Coupon." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div></div>`);

}


}

if(window.location.pathname == '/s/60-yas-deneme-dersi'){

if(!$('body').hasClass('loggedIn')){

$('.page > .container').html(`<div class="alert alert-info">Deneme dersinden faydalanabilmek için <strong><a href="/signup?return=/s/60-yas-deneme-dersi">kayıt</a></strong> olmanız gerekmektedir. Lütfen kayıt olduktan sonra tekrar deneyin !</div>`);

}else {
$('.page > .container').html(` <div class="fit-form-youtube"><div class="fit-form-con"><div class="fit-form-item"><div class="fit-form-items"><div class="fit-form-head"><h2 class="fit-h2 fit-color-1">Fit Kültür kamplarına katılmadan önce küçük bir ön izlemeye ne dersin?  
</h2></div></div><div class="fit-form-items fit-form-padding"><div class="fit-form-video"><div class="fit-form-play"><iframe width="1410" height="793" src="https://www.youtube.com/embed/2_FY-MI6esI" title="60 Yaş Üzeri - Deneme Dersi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="fit-inst-bg fit-bg-turkuaz"></div></div><div class="fit-form-content"><div class="fit-form-col"><h5 class="fit-h5 fit-color-1">Fit Kültür kamplarında ay boyunca haftada 4 gün, 45 dakika canlı yayınlarla gerçekleştirilen derslere katılacaksın. </br></br>Peki bu canlı dersler nasıl  geçiyor?</br></br>Burada, seçtiğin kampın bir ders videosunu bulabilirsin.  Bu video, kampın eğitmen yaklaşımını, ders temposunu ve genel  atmosferini anlamanı sağlayacaktır.</h5></div></div></div><div class="fit-form-items"><div class="fit-form-content fit-form-padding"><h4 class="fit-h4 fit-color-1">Ders videosundan keyif aldıysan artık kampa katılmaya hazırsın.</br>
Kamplarda seni canlı derslerden çok daha fazlası bekliyor.</h4> <div class="fit-form-row fit-bg-turkuaz"><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kampının Telegram grubu üzerinden sürekli destek ve eğitmene erişim şansı.</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Seçtiğin kampa özel oluşturulan Telegram grubundan diğer katılımcılarla sürekli iletişim, motivasyon ve destek ortamı</h5></div><p><i class="fas fa-plus"></i>&nbsp;</p><div class="fit-form-box"><h5 class="fit-h5 fit-color-1">Kaçırdığın canlı dersleri istediğin zaman izleyebilmen için kayıtlı ders videoları</h5></div></div><div class="fit-form-button"><a href="/paketler/?tags=50yas" class="fit-form-btn fit-button fit-bg-pink fit-color-2 fit-p fit-bold">Kamplara Katıl</a></div></div></div><div class="fit-form-items"></div><div class="fit-form-items"><div class="fit-faq-wp"><div class="fit-faq-container"><h2 class="fit-h2 fit-color-1">Sıkça Sorulan Sorular</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Deneme dersini izleyenlere özel indirim kuponunu nasıl kullanabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> İndirim kuponunu nasıl kullanacağını anlatan bu <a href="https://www.youtube.com/shorts/IxbZigClc3w" class="youtube-link">videoyu izleyebilirsin.</a> <span class="fit-bold">Kupon Kodun: DENEME10</span> </p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Kampı satın aldım, derslere nereden erişeceğim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"> <p>Yapılacak her canlı dersin linki Telegram grubundan katılımcılarla paylaşılacak. İletilen linke tıklaman yeterli. </p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Telegram grubuna nasıl katılacağım?  </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Kampı satın aldıktan sonra sana gönderilen e-postadaki butona tıklayarak Telegram grubuna katılabilirsin. Spam klasörünü de kontrol etmeyi unutma.</p></div><button id="accordion-button-4" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Sorularım var, size nasıl ulaşabilirim?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p> Sorularınız için Whatsapp hattımıza mesaj gönderebilirsin. Aklındaki sorulara cevap vermek için buradayız.</p></div></div></div></div></div></div></div></div><div id="videoModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.7); justify-content:center; align-items:center;"><div style="position:relative; width:80%; max-width:800px;"><span id="closeModal" style="position:absolute; top:-30px; right:0; color:#fff; cursor:pointer; font-size:20px;">Kapat ✖</span><iframe width="100%" height="450" src="https://www.youtube.com/embed/IxbZigClc3w" title="Use of Discount Coupon." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div></div>`);

}


}

});
</script>



<script>

function toggleKalca() {
            let cinsiyet = document.getElementById("cinsiyet").value;
            let kalcaDiv = document.getElementById("kalcaDiv");

            if (cinsiyet === "kadin") {
                kalcaDiv.classList.remove("hidden");
            } else {
                kalcaDiv.classList.add("hidden");
            }
        }

$(document).ready(function() {
$('.package-payment-options').css('display', 'block');
$('a[onclick].btn-primary-package').hide();
$('a[data-package-action-type="cc"].btn-primary-package').text('Satın Al');


function vucutKitleEndeksi() {
    let kilo = parseFloat(document.getElementById("kilo").value);
    let boy = parseFloat(document.getElementById("boy").value) / 100; // cm'yi metreye çeviriyoruz
    
    if (!isNaN(kilo) && !isNaN(boy) && boy > 0) {
        let bmi = kilo / (boy * boy);
        let htmlContent = `
            <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">Vücut Kitle Endeksi </h2>
            <h2 class="resulth2" style="font-size: 90px; margin: 0; line-height: 90px; color: #4f0554;">${bmi.toFixed(2)}</h2>
            <ul>
                <li>18.5’in altı: Zayıf</li>
                <li>18.5 - 24.9: Normal kilo</li>
                <li>25 - 29.9: Fazla kilolu</li>
                <li>30 - 34.9: 1. derece obez</li>
                <li>35 - 39.9: 2. derece obez</li>
                <li>40 ve üzeri: 3. derece (morbid) obez</li>
            </ul>
        `;
        $(".hy-gym-box-l.hesaplamalar").html(htmlContent);
    } else {
        alert("Lütfen geçerli bir boy ve kilo değeri girin.");
    }
}

function tdeeHesapla() {
    let bmr = parseFloat(document.getElementById("bmr").value);
    let aktivite = document.getElementById("aktivite").value;
    let carpimFaktoru = {
        "hareketsiz": 1.2,
        "az-aktif": 1.375,
        "orta-aktif": 1.55,
        "cok-aktif": 1.725,
        "asiri-aktif": 1.9
    };
    
    if (!isNaN(bmr) && carpimFaktoru[aktivite]) {
        let sonuc = bmr * carpimFaktoru[aktivite];
let htmlContent = `
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            Bazal Metabolizma Hızı
        </h2>
        <h2 class="resulth2" style="font-size: 90px; margin: 0; line-height: 110px; color: #4f0554;">
             ${sonuc.toFixed(2)}<br>kcal/gün
        </h2>
        <a href="/uzmanlar" class="hy-gym-btn" style="margin-top:25px;">Eğitmenle Planını Oluştur</a>
    `;
    
    $(".hy-gym-box-l.hesaplamalar").html(htmlContent);
    } else {
        alert("Lütfen geçerli bir BMR değeri girin.");
    }
}

function calculateBMR() {
            const gender = document.getElementById("cinsiyet").value;
            const height= parseFloat(document.getElementById("boy").value);
            const weight = parseFloat(document.getElementById("kilo").value);
            const age = parseInt(document.getElementById("yas").value);
            let aktivite = document.getElementById("aktivite").value;
			let carpimFaktoru = {
				"hareketsiz": 1.2,
				"az-aktif": 1.375,
				"orta-aktif": 1.55,
				"cok-aktif": 1.725,
				"asiri-aktif": 1.9
			};
            let bmr;

            if (gender === "erkek") {
                bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
            } else {
                bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
            }
			
			tdeeSonuc = bmr * carpimFaktoru[aktivite];

let htmlContent = `<div>
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            Bazal Metabolizma Hızı
        </h2>
        <h2 class="resulth2" style="font-size: 70px; margin: 0; line-height: 80px; color: #4f0554;">
             ${bmr.toFixed(2)}<br>kcal/gün
        </h2>
		</div>
		<div>
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            TDEE
        </h2>
        <h2 class="resulth2" style="font-size: 70px; margin: 0; line-height: 80px; color: #4f0554;margin-bottom:25px;">
             ${tdeeSonuc.toFixed(2)}<br>kcal/gün
        </h2>
        <a href="/uzmanlar" class="hy-gym-btn" style="margin-top:25px;">Eğitmenle Planını Oluştur</a>
		</div>
    `;
    
    $(".hy-gym-box-l.hesaplamalar").html(htmlContent);



        }


        function toggleKalca() {
            let cinsiyet = document.getElementById("cinsiyet").value;
            let kalcaDiv = document.getElementById("kalcaDiv");

            if (cinsiyet === "kadin") {
                kalcaDiv.classList.remove("hidden");
            } else {
                kalcaDiv.classList.add("hidden");
            }
        }

        function hesapla() {
            let cinsiyet = document.getElementById("cinsiyet").value;
            let bel = parseFloat(document.getElementById("bel").value) / 2.54;
            let boyun = parseFloat(document.getElementById("boyun").value) / 2.54;
            let boy = parseFloat(document.getElementById("boy").value) / 2.54;
            let kalca = parseFloat(document.getElementById("kalca").value) / 2.54;

            if (isNaN(bel) || isNaN(boyun) || isNaN(boy) || (cinsiyet === "kadin" && isNaN(kalca))) {
                alert("Lütfen tüm alanları doldurun!");
                return;
            }

            let yagYuzdesi;

            if (cinsiyet === "kadin") {
                yagYuzdesi = 163.205 * Math.log10(bel + kalca - boyun) - 97.684 * Math.log10(boy) - 78.387;
            } else {
                yagYuzdesi = 86.010 * Math.log10(bel - boyun) -70.041 * Math.log10(boy) + 36.76;
            }

let htmlContent = `
        <h2 class="sonuch2" style="font-family: 'Poppins'; font-weight: 700; font-size: 26px; color: #4f0554; margin: 0;">
            Vücut Yağ Oranı
        </h2>
        <h2 class="resulth2" style="font-size: 90px; margin: 0; line-height: 90px; color: #4f0554;">%
            ${yagYuzdesi.toFixed(2)}
        </h2>
        <span>%15 ve altı ideal kabul edilir.</span>
        <a href="/uzmanlar" class="hy-gym-btn">Eğitmenle Planını Oluştur</a>
    `;
    
    $(".hy-gym-box-l.hesaplamalar").html(htmlContent);

        }

$(document).on("click", "#hesaplaBtn", hesapla);
    $(document).on("click", "#vucutkitlehesapla", vucutKitleEndeksi);
    $(document).on("click", "#bazalhesapla", calculateBMR);
$(document).on("click", "#tdeehesapla", tdeeHesapla);

      $('.header').prepend('<div class="header-massage"><p>Yeni Hedefler, Yeni Başlangıçlar! İndirim Kodu: <span class="kod-text" id="copyText">HEDEF10 <i class="far fa-copy"></i></span><span class="copy-message">Kopyalandı!</span>Koduyla %10 İndirim Senin!<span class="kupon-kullan">Kuponumu nasıl kullanırım?</span> <i class="fas fa-arrow-right"></i></p></div><div class="popup-overlay1"><div class="popup-content1"><p class="kupon-text">Üye olduktan sonra, profilinizdeki <span>"Kuponlar"</span> menüsüne girin. Kupon Kodunu ilgili alana yazıp <span>"Gönder"</span> butonuna basarak indirim kodunuzu hesabınıza ekleyebilirsiniz.</p><button class="kupon-kapat">Kapat</button></div></div>');

    $("#copyText").click(function() {
        var text = $(this).text(); // Metni al
        var tempInput = $("<input>"); // Geçici bir input oluştur
        $("body").append(tempInput); // Body'ye ekle
        tempInput.val(text).select(); // Değeri belirle ve seç
        document.execCommand("copy"); // Kopyalama işlemi yap
        tempInput.remove(); // Geçici input'u kaldır
        
        // Kopyalandı mesajını göster
        $(".copy-message").fadeIn().delay(1000).fadeOut();
    });
});
</script>
<script>
    $(document).ready(function(){
        // Kupon Kullanımı butonuna tıklanınca popup aç
        $(".kupon-kullan").click(function(){
            $(".popup-overlay1").fadeIn(); // Popup göster
        });

        // Kapat butonuna tıklanınca popup kapanır
        $(".kupon-kapat").click(function(){
            $(".popup-overlay1").fadeOut(); // Popup gizlenir
        });
    });
</script>

<script>
$(document).ready(function() {

$('a.btn.more').text('Tümünü Görüntüle');
$('#message').attr('placeholder','Mesajınız');

if(window.location.pathname == '/s/kamplar'){

$('.page .container').css('max-width','100%');
$('.page-content').css('padding','0');

}

if(window.location.pathname == '/s/kurumsal'){
      
$('.page .container').css('max-width','100%');
$('.page-content').css('padding','0');
$('.page-excerpt').css('display','none');
$('.page-title').css('display','none');
$('.form-container').appendTo('.fit-contact-form');

$('#email').attr('placeholder','Şirket Adınız');


}



if(window.location.pathname == '/s/havale'){

$('#contact-form').children().eq(6).find('label').css('display', 'block');

$('.page').css({
    'background-color': 'transparent',
    'background-image': 'url(https://fitkultur.gurulize.com/images/202512/312_1920x1080.png)',
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
});

}

document.querySelectorAll(".footer-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const list = toggle.nextElementSibling;
    list.classList.toggle("active");
    toggle.classList.toggle("open");
  });
});


    });
</script>



<script>

$(document).ready(function () {

  if (window.location.pathname === "/signup") {
  
$('.user-form.register').prepend('<div class="fit-signup-wp"><div class="fit-signup-con"><div class="fit-signup-title"><h2 class="fit-h2 fit-color-1">Kayıt Ol!</h2><p class="fit-p fit-color-3">Hadi, çabuk ol ve Fit Kültür’e dahil ol. Seninle birlikte hareket etmek isteyen kişilere online olarak ulaş!</p></div></div></div>');

$('#name').attr('placeholder','Adınız');
$('#email').attr('placeholder','E-posta Adresiniz');
$('#password').attr('placeholder','Parola');
$('#password-repeat').attr('placeholder','Parola Tekrar');
$('.like-button').prepend('<div class="google-favicon"><img src="/images/202510/247_70x70.png"/></div>');


  }

 if (window.location.pathname === "/profile") {

      $('.purchases-tab-href').text('Online Paketler');
      $('.inline-submit button').text('Gönder');

}

  if (window.location.pathname === "/login") {
  
$('.user-form.login').prepend('<div class="fit-signup-wp"><div class="fit-signup-con"><div class="fit-signup-title"><h2 class="fit-h2 fit-color-1">Giriş Yap</h2></div></div></div>');


$('#email').attr('placeholder','E-posta Adresiniz');
$('#password').attr('placeholder','Parola');


$('.like-button').prepend('<div class="google-favicon"><img src="/images/202510/247_70x70.png"/></div>');

  }

if (window.location.pathname === "/paketler/" &&
        new URLSearchParams(window.location.search).get("tags") === "online") {

$('.page-header').css('display','none');
$('.page .container').css('max-width','100%');  


$('.list.flex').prepend('<div class="fit-abonelik-wrapper"><div class="fit-abonelik-container"><div class="fit-abonelik-item"><h2 class="fit-h2 fit-color-1">Online Fitness Kampı</h2><div class="fit-sales-card"><div class="fit-sales-con"><div class="fit-sales-item"><div class="fit-sales-content"><div class="fit-sales-img"><img src="/images/202512/337_968x748.png" alt="" width="214" height="197" /></div><div class="fit-sales-excerpt"><h4 class="fit-h4 fit-color-1">Erhan Ünal</h4><p class="fit-p fit-color-1">Kurucu</p><p class="fit-sales-green fit-color-1">Uzmanlık Alanları:</p><p class="fit-p fit-color-1">Kilo Yönetimi (Kilo Alma &amp; Verme), Kas Kazanımı ve Güç Artırma, Sağlıklı Yaşam ve Motivasyon</p></div><div class="fit-sales-bg"><img src="/images/202512/332_302x212.png" alt="" width="302" height="212" /></div></div></div></div></div><p class="fit-pkt-p fit-p fit-color-3">Havale/EFT ile ödeme yapmak için lütfen <a class="havale-link" href="/s/havale">buraya tıklayınız.</a><br/>Herhangi bir problem yaşarsanız WhatsApp destek hattımıza ulaşabilirsiniz.</p> <div class="fit-camp-wrapper"><div class="fit-camp-container"><div class="fit-camp-item"><div class="fit-camp-items fit-margin-bottom"><div class="fit-camp-col"><div class="fit-camp-video"><iframe title="ZIN™ 116 Early Release ???? #zumba" src="//www.youtube.com/embed/5aN84cJrYn8" width="853" height="480" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div></div><div class="fit-camp-col"><div class="fit-camp-content"><div class="fit-camp-title"><h3 class="fit-h3 fit-color-1">Kampın İçeriği</h3><p class="fit-p fit-color-1">Online Fitness Kampı, spora yeni başlayan veya günlük rutinine sağlıklı alışkanlıklar eklemek isteyenler için ideal bir başlangıç noktasıdır.</p></div><div class="fit-camp-list"><ul><li class="fit-p fit-color-1"><span><i class="fas fa-check-circle"></i></span><p class="">Haftanın 4 günü gerçekleştirilen canlı dersler ile düzenli egzersiz alışkanlığı kazanılırken, uzman rehberliği ile doğru form ve teknik öğrenilir.</p></li><li class="fit-p fit-color-1"><i class="fas fa-check-circle"></i> Katılımcılar, satın alma sonrası e-posta ile gelen Telegram davet linki aracılığıyla özel gruplara katılır ve burada tüm duyuruları takip ederek canlı ders saatlerinden, ipuçlarından ve destek içeriklerinden haberdar olur</li><li class="fit-p fit-color-1"><i class="fas fa-check-circle"></i> Sürekli iletişim ve motivasyon desteği sayesinde program süresince katılımcıların ilerlemesi yakından takip edilir. </li></ul></div></div></div></div><div class="fit-camp-items"><div class="fit-camp-content"><div class="fit-camp-price"><div class="fit-camp-box fit-bg-mor"><a href="/s/deneme-dersi"> <span class="fit-h4 fit-color-2">Ücretsiz</span> <span class="fit-h3 fit-color-2">Deneme Dersi</span> </a></div></div></div></div></div></div></div></p><div class="fit-abonelik-top"></div><div class="fit-abonelik-bottom"><div class="fit-abonelik-card"><div class="fit-card-top fit-bg-mor"><h3 class="fit-h3 fit-color-2">Kamp (Abonelik)</h3></div><div class="fit-card-center fit-bg-green"><h3 class="fit-h3 fit-color-1">6 Aylık Abonelik</h3><p class="fit-p fit-color-3">Aylık olarak ödeme, otomatik çekim ve istediğin zaman iptal etme avantajı.</p><h3 class="fit-h3 fit-color-1">Aylık 2400 &#x20BA</h3><div class="fit-card-btn"><a class="fit-p fit-color-2 fit-button stripe-fitkultur fit-bg-mor" href="https://buy.stripe.com/8x29AT4PyaNS5VwfK63Ru09">Satın Al</a></div></div><div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubundan İtibaren Başlar</li><li class="fit-p fit-color-3">Aylık abonelik şeklinde olup, her ay kartınızdan otomatik çekim yapılır</li><li class="fit-p fit-color-3">İndirimli fiyat avantajından yararlanırsınız</li><li class="fit-p fit-color-3">Sabit fiyat garantisi vardır</li><li class="fit-p fit-color-3">Dilediğiniz zaman iptal edebilirsiniz</li></ul></div></div></div></div></div></div>');

$('.item.gtm-package-item').appendTo('.fit-abonelik-top');
$('.fit-abonelik-card').appendTo('.fit-abonelik-top');

$('.list.flex').append('<div class="fit-faq-page"><div class="fit-faq-wp"><div class="fit-faq-container"><h2 class="fit-h2 fit-color-1">Sıkça Sorulan Sorular</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Beslenme listesi veriyor musunuz?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Hayır, katılımcılara sabit bir beslenme listesi vermiyoruz. Çünkü araştırmalar, bu tür listelere uzun vadede sadık kalmanın zor olduğunu gösteriyor. Bunun yerine, temel beslenme eğitimi vererek katılımcıların yasaksız, dengeli ve sürdürülebilir bir beslenme alışkanlığı geliştirmesini hedefliyoruz. Besinleri "iyi/kötü" olarak etiketlemeden, sağlıklı bir ilişki kurmalarını önemsiyoruz. Eğer özel bir durumunuz varsa veya mutlaka birebir diyetisyen desteği almak istiyorsanız, Pro Paket’i tercih edebilirsiniz. Bu pakette, her hafta düzenli olarak bir diyetisyenle görüşerek ilerlemenizi takip edebilirsiniz.</p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Dersler canlı mı? Saatleri bana uymazsa ne olacak? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Derslerimizin tamamı canlı olarak gerçekleşmektedir. Ancak saatleri size uymuyorsa endişelenmeyin, tüm derslerin kayıtları bir hafta boyunca erişime açık olur. Katılımcılarımızın çoğu dersleri kayıttan takip ediyor ve bu sistemden oldukça memnun.</p></div><button id="accordion-button-11" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Ders programınız var mı, varsa gün ve saatleri nedir? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>• Pazartesi 19:00: Full Body &amp; Cardio (Erhan Ünal)<br />• Salı 19:00: Lower Body &amp; Cardio (Erhan Ünal)<br />• Çarşamba: Dinlenme günü • Perşembe 19:00: Full Body &amp; Cardio (Erhan Ünal)<br />• Cuma 19:00: Lower Body &amp; Cardio (Erhan Ünal)<br />• Cumartesi 11:00: Dinlenme günü<br />• Pazar 20:00: Beslenme Eğitimi (Pırıl) (Sadece programın ilk iki günü uygulanır)</p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Hangi ekipmanlara ihtiyacım var?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Online Fitness Kampı’na katılmak için özel bir ekipmana ihtiyacınız yok. Vücut ağırlığınız veya bir çift su şişesiyle bile egzersizleri yapabilirsiniz. Zamanla güçlendikçe bir çift dambıl edinmeniz faydalı olabilir. Bu tür ihtiyaçlarda hem Telegram grubunda hem de canlı derslerde sizi yönlendireceğim.</p></div><button id="accordion-button-4" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Hiç spor yapmadım / Zaten spor yapıyorum. Bu program bana uygun mu? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Evet, kesinlikle uygun. Programlarımız her seviyeye özel hazırlanıyor. Her ders öncesinde o günkü antrenman planı grupta paylaşılıyor, böylece doğaçlama yapılmıyor ve neyle karşılaşacağınızı önceden biliyorsunuz. Özellikle yeni başlayanlar için adım adım ilerleyen bir sistemimiz var. Kas ağrısı ya da sakatlanma riski yaşamadan, kontrollü şekilde seviye atlamanızı sağlıyoruz. Düzenli katılım ile 1 ay içinde ciddi gelişim gözlemlemeniz mümkün.</p></div><button id="accordion-button-5" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Telegram kullanmak zorunda mıyım?</span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Evet. Tüm iletişimimiz Telegram üzerinden sağlanıyor. WhatsApp a benzer bir uygulama ama yöneticiler için çok daha fazla kontrol imkanı sunuyor. Grup içi sohbetleri sınırlayabiliyor, özel bölümler oluşturabiliyor ve üyeler birbirlerinin telefonunu göremiyor. Programa katılmak için Telegram ı indirmeniz gerekiyor.</p></div><button id="accordion-button-6" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Sağlık sorunlarım var. Katılabilir miyim? (Bel-boyun fıtığı, menisküs, sakatlık vb.) </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Doktorunuz ya da fizyoterapistiniz egzersiz yapmanızı öneriyorsa, bu program sizin için oldukça uygundur. Yine de kafanıza takılan sorular varsa Instagram üzerinden bana yazabilirsiniz.</p></div><button id="accordion-button-7" aria-expanded="false"><span  class="accordion-title btn-font fit-p fit-color-1">Nasıl kayıt olabilirim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Katılmak istediğiniz kampın altında bulunan “Hemen Katıl” butonuna tıklayarak kaydolabilirsiniz. 3 ya da 6 aylık paketlerde her ay kartınızdan çekim yapılır. Kayıt sonrası mail adresinize bir bilgilendirme maili gönderilir. Bu mailde yer alan bağlantıdan Telegram grubuna katılım isteği gönderebilirsiniz. Gerekli kontrollerin ardından, mesai saatleri içinde onaylanırsınız. Telegram kullanıcı adınız ile kayıt adınızın eşleşmesi gerekir. Aksi durumda sizle iletişime geçilir.</p></div><button id="accordion-button-8" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Zaten bir diyetisyenle çalışıyorum. Yine de katılabilir miyim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Evet, katılabilirsiniz. Ancak mevcut diyetisyeninize egzersiz programına başladığınızı bildirmeniz iyi olur. Bu, beslenme planınızda gerekli düzenlemeleri yapabilmeleri açısından önemlidir.</p></div><button id="accordion-button-9" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Yurt dışında yaşıyorum. Katılabilir miyim? Ödeme nasıl olur? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Elbette katılabilirsiniz. Yurt dışından birçok katılımcımız var. Ödemelerinizi kredi kartı ile güvenli bir şekilde gerçekleştirebilirsiniz.</p></div><button id="accordion-button-10" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Kamera açmamız gerekiyor mu? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Hayır. Dersler YouTube Live üzerinden yapılıyor ve sadece benim kameram açık oluyor. Egzersizler kolaydan zora doğru ilerlediği için, sizi zorlamadan ve hata yapma riski olmadan ilerlemeniz mümkün. Sürece güvenin!</p></div></div></div></div></div></div>');

  }
if (window.location.pathname === "/paketler/" &&
        new URLSearchParams(window.location.search).get("tags") === "esneklik") {

$('.page-header').css('display','none');
$('.list.flex').css('justify-content', 'center');

$('.list.flex').prepend('<div class="fit-abonelik-wrapper"><div class="fit-abonelik-container"><div class="fit-abonelik-item"><h2 class="fit-h2 fit-color-1">Esneklik ve Düşük Yoğunluklu Egzersiz Kampı</h2><div class="fit-sales-card"><div class="fit-sales-con"><div class="fit-sales-item"><div class="fit-sales-content"><div class="fit-sales-img"><img src="/images/202512/336_968x748.png" alt="" width="214" height="197" /></div><div class="fit-sales-excerpt"><h4 class="fit-h4 fit-color-1">Mithat Ahmed</h4><p class="fit-p fit-color-1">Fitness Eğitmeni</p><p class="fit-sales-green fit-color-1">Uzmanlık Alanları:</p><p class="fit-p fit-color-1">Mobilite & Esneklik, Fonksiyonel Antrenman, Postür ve hareket analizi, Kişiye özel online programlama</p></div><div class="fit-sales-bg"><img src="/images/202512/332_302x212.png" alt="" width="302" height="212" /></div></div></div></div></div><p class="fit-pkt-p fit-p fit-color-3">Havale/EFT ile ödeme yapmak için lütfen <a class="havale-link" href="/s/havale">buraya tıklayınız.</a><br/>Herhangi bir problem yaşarsanız WhatsApp destek hattımıza ulaşabilirsiniz.</p><div class="fit-camp-wrapper"><div class="fit-camp-container"><div class="fit-camp-item"><div class="fit-camp-items fit-margin-bottom" style="display: flow-root;"><div class="fit-camp-col"> </div><div class="fit-camp-col"><div class="fit-camp-content"><div class="fit-camp-title"><h3 class="fit-h3 fit-color-1" style="margin-bottom: 1rem;">Kampın İçeriği</h3><p class="fit-p fit-color-1">Hareket kabiliyetini artıran, eklem ve kas sağlığını destekleyen düşük yoğunluklu egzersizlerden oluşur. Vücudu zorlamadan rahatlatır, günlük yaşamda daha akıcı ve özgür hareket etmeyi sağlar.</p></div><div class="fit-camp-list"><ul><li class="fit-p fit-color-1"><span><i class="fas fa-check-circle"></i></span><p class="">Program boyunca esneklik, denge ve rahatlama odaklı egzersizler kademeli olarak ilerler; her seviyeden katılımcının güvenle uyum sağlayabileceği bir yapı sunar.</p></li><li class="fit-p fit-color-1"><i class="fas fa-check-circle"></i>Haftanın 3 günü canlı derslerle düzenli egzersiz alışkanlığı kazandırılır.</li><li class="fit-p fit-color-1"><i class="fas fa-check-circle"></i> Katılımcılar, Telegram gruplarına katılarak tüm duyuruları ve bilgilendirmeleri takip edebilir; program süresince uzmanlarla sürekli iletişimde kalarak destek alır ve motivasyonlarını korur.</li></ul></div></div></div></div><div class="fit-camp-items"><div class="fit-camp-content"><div class="fit-camp-price"><div class="fit-camp-box fit-bg-mor"><a href="/s/esneklik-deneme-dersi"> <span  class="fit-h4 fit-color-2">Ücretsiz</span> <span  class="fit-h3 fit-color-2">Deneme Dersi</span></a></div></div></div></div></div></div></div></div></div></div>');

$('.list.flex').append('<div class="fit-faq-page"><div class="fit-faq-wp"><div class="fit-faq-container"><h2 class="fit-h2 fit-color-1">Sıkça Sorulan Sorular</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Bu kamp kimler için uygundur? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Bu kamp, hareket kabiliyetini artırmak isteyen, yoğun egzersizlerden kaçınan ve vücudunu zorlamadan çalışmak isteyen herkes için uygundur. Her seviyeye hitap eder.</p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Dersler canlı mı? Saatleri bana uymazsa ne olacak? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Derslerimizin tamamı canlı olarak gerçekleşmektedir. Ancak saatleri size uymuyorsa endişelenmeyin, tüm derslerin kayıtları bir hafta boyunca erişime açık olur. Katılımcılarımızın çoğu dersleri kayıttan takip ediyor ve bu sistemden oldukça memnun.</p></div><button id="accordion-button-11" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Ders programınız var mı, varsa gün ve saatleri nedir? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Canlı derslerimiz, Pazartesi, Çarşamba, Cuma 20:00 da gerçekleşiyor.<br />Canlı derslere katılamayanlar, bir hafta boyunca derslerin tekrarına erişebileceklerdir.</p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Egzersizler zorlayıcı mı? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Hayır. Program düşük yoğunluklu egzersizlerden oluşur. Amaç vücudu yormak değil, rahatlatmak, esnekliği ve dengeyi güvenli şekilde geliştirmektir.</p></div><button id="accordion-button-4" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Daha önce spor yapmamış kişiler katılabilir mi? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Evet. Egzersizler kademeli olarak ilerler ve daha önce spor yapmamış katılımcıların da rahatça uyum sağlayabileceği şekilde planlanmıştır.</p></div><button id="accordion-button-5" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Program süresince destek alabilecek miyim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Evet. Satın alma sonrası Telegram grubuna dahil olursunuz. Duyurular bu grup üzerinden paylaşılır, uzmanlarla sürekli iletişim kurarak destek alabilirsiniz.</p></div><button id="accordion-button-6" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Sağlık sorunlarım var. Katılabilir miyim? (Bel-boyun fıtığı, menisküs, sakatlık vb.) </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Doktorunuz ya da fizyoterapistiniz egzersiz yapmanızı öneriyorsa, bu program sizin için oldukça uygundur. Yine de kafanıza takılan sorular varsa WhatsApp destek hattından bize ulaşabilirsiniz.</p></div><button id="accordion-button-9" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Yurt dışında yaşıyorum. Katılabilir miyim? Ödeme nasıl olur? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Elbette katılabilirsiniz. Yurt dışından birçok katılımcımız var. Ödemelerinizi kredi kartı ile güvenli bir şekilde gerçekleştirebilirsiniz.</p></div><button id="accordion-button-10" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Kamera açmamız gerekiyor mu? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Hayır. Dersler YouTube Live üzerinden yapılıyor ve sadece benim kameram açık oluyor. Egzersizler kolaydan zora doğru ilerlediği için, sizi zorlamadan ve hata yapma riski olmadan ilerlemeniz mümkün. Sürece güvenin!</p></div></div></div></div></div>');
$('.fit-faq-wp').css('margin-top', '3rem');

  }

if (window.location.pathname === "/paketler/" &&
        new URLSearchParams(window.location.search).get("tags") === "50yas") {

$('.page-header').css('display','none');
$('.list.flex').css('justify-content', 'center');

$('.list.flex').prepend('<div class="fit-abonelik-wrapper"><div class="fit-abonelik-container"><div class="fit-abonelik-item"><h2 class="fit-h2 fit-color-1">60+ Sağlıklı Yaş Alma Grubu</h2><div class="fit-sales-card"><div class="fit-sales-con"><div class="fit-sales-item"><div class="fit-sales-content"><div class="fit-sales-img"><img src="/images/202512/338_968x748.png" alt="" width="214" height="197" /></div><div class="fit-sales-excerpt"><h4 class="fit-h4 fit-color-1">Selen Saygılı</h4><p class="fit-p fit-color-1">Fitness/Pilates Eğitmeni</p><p class="fit-sales-green fit-color-1">Uzmanlık Alanları:</p><p class="fit-p fit-color-1">Medikal egzersiz, Pilates, Prenatal/postnatal egzersiz</p></div><div class="fit-sales-bg"><img src="/images/202512/332_302x212.png" alt="" width="302" height="212" /></div></div></div></div></div><p class="fit-pkt-p fit-p fit-color-3">Havale/EFT ile ödeme yapmak için lütfen <a class="havale-link" href="/s/havale">buraya tıklayınız.</a><br/>Herhangi bir problem yaşarsanız WhatsApp destek hattımıza ulaşabilirsiniz.</p>   <div class="fit-camp-wrapper"><div class="fit-camp-container"><div class="fit-camp-item"><div class="fit-camp-items fit-margin-bottom" style="display: flow-root;"><div class="fit-camp-col"></div><div class="fit-camp-col"><div class="fit-camp-content"><div class="fit-camp-title"><h3 class="fit-h3 fit-color-1" style="margin-bottom: 1rem;">Kampın İçeriği</h3><p class="fit-p fit-color-1">60+ Sağlıklı Yaş Alma Grubu, 60 yaş ve üzeri bireyler için özel olarak tasarlanmış güvenli ve etkili bir online programdır.</p></div><div class="fit-camp-list"><ul><li class="fit-p fit-color-1"><span><i class="fas fa-check-circle"></i></span><p class="fit-p fit-color-1">Yaşa uygun egzersizlerle kas ve eklem sağlığı korunur, esneklik ve denge geliştirilir.</p></li><li class="fit-p fit-color-1"><i class="fas fa-check-circle"></i> Haftanın 3 günü canlı derslerle katılımcılar düzenli bir egzersiz rutini edinir. Satın alma sonrası Telegram gruplarına dahil olan katılımcılar, programla ilgili duyuruları ve bilgilendirmeleri anında alır.</li><li class="fit-p fit-color-1"><i class="fas fa-check-circle"></i> Uzman rehberliği ve sürekli iletişim desteği ile katılımcılar motivasyonlarını yüksek tutar ve sağlıklı bir yaşam sürdürür.</li></ul></div></div></div></div><div class="fit-camp-items"><div class="fit-camp-content"><div class="fit-camp-price"><div class="fit-camp-box fit-bg-mor"><a href="/s/60-yas-deneme-dersi"> <span  class="fit-h4 fit-color-2">Ücretsiz</span> <span  class="fit-h3 fit-color-2">Deneme Dersi</span></a></div></div></div></div></div></div></div></div></div></div>');

$('.list.flex').append('<div class="fit-faq-page"><div class="fit-faq-wp"><div class="fit-faq-container"><h2 class="fit-h2 fit-color-1">Sıkça Sorulan Sorular</h2><div class="accordion"><div class="accordion-item"><button id="accordion-button-1" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Bu programa katılmak için daha önce spor yapmış olmam gerekiyor mu? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Hayır. Program, daha önce spor yapmamış ya da uzun süredir ara vermiş 60 yaş üstü bireyler için özel olarak hazırlanmıştır. Egzersizler yaşa ve seviyeye uygundur.</p></div><button id="accordion-button-2" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Dersler canlı mı? Saatleri bana uymazsa ne olacak? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Derslerimizin tamamı canlı olarak gerçekleşmektedir. Ancak saatleri size uymuyorsa endişelenmeyin, tüm derslerin kayıtları bir hafta boyunca erişime açık olur. Katılımcılarımızın çoğu dersleri kayıttan takip ediyor ve bu sistemden oldukça memnun.</p></div><button id="accordion-button-11" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Ders programınız var mı, varsa gün ve saatleri nedir? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Canlı derslerimiz, Pazartesi, Çarşamba, Cuma günleri saat: 10:30-11:45 arası gerçekleşiyor.<br />Canlı derslere katılamayanlar, bir hafta boyunca derslerin tekrarına erişebileceklerdir.</p></div><button id="accordion-button-3" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Egzersizler eklem ve diz sorunları olanlar için uygun mu? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Programda yer alan hareketler kas ve eklem sağlığını korumaya yöneliktir. Denge ve esneklik çalışmaları ön plandadır. Tüm egzersizler güvenli ve kontrollü şekilde uygulanır.</p></div><button id="accordion-button-4" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Programa katıldıktan sonra nasıl bilgilendirileceğim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Satın alma sonrası Telegram grubuna dahil edilirsiniz. Ders saatleri, duyurular ve programla ilgili tüm bilgilendirmeler bu grup üzerinden paylaşılır.</p></div><button id="accordion-button-5" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Dersler sırasında ve sonrasında destek alabilecek miyim? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Evet. Uzman rehberliği ve sürekli iletişim desteği sayesinde sorularınızı iletebilir, süreç boyunca motivasyonunuzu yüksek tutabilirsiniz.</p></div><button id="accordion-button-6" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Sağlık sorunlarım var. Katılabilir miyim? (Bel-boyun fıtığı, menisküs, sakatlık vb.) </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Doktorunuz ya da fizyoterapistiniz egzersiz yapmanızı öneriyorsa, bu program sizin için oldukça uygundur. Yine de kafanıza takılan sorular varsa WhatsApp destek hattı üzerinden bize ulaşabilirsiniz.</p></div><button id="accordion-button-9" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Yurt dışında yaşıyorum. Katılabilir miyim? Ödeme nasıl olur? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Elbette katılabilirsiniz. Yurt dışından birçok katılımcımız var. Ödemelerinizi kredi kartı ile güvenli bir şekilde gerçekleştirebilirsiniz.</p></div><button id="accordion-button-10" aria-expanded="false"><span class="accordion-title btn-font fit-p fit-color-1">Kamera açmamız gerekiyor mu? </span><span class="fit-icon" aria-hidden="true"></span></button><div class="accordion-content"><p>Hayır. Dersler YouTube Live üzerinden yapılıyor ve sadece benim kameram açık oluyor. Egzersizler kolaydan zora doğru ilerlediği için, sizi zorlamadan ve hata yapma riski olmadan ilerlemeniz mümkün. Sürece güvenin!</p></div></div></div></div></div></div>');
$('.fit-faq-wp').css('margin-top', '3rem');

  }

$('.event.container h2').addClass('fit-h2 fit-color-1');
$('.event.container').prepend('<div class="fit-event-pg"><div class="fit-event-h2"></div><div class="fit-event-p"><p class="fit-p fit-color-3">Dolu dolu canlı dersler ve uzman webinarlarıyla spora birlikte motive ol!</p></div></div>');
$('.event.container h2').appendTo('.fit-event-h2');
$('.item.gtm-package-item').prepend('<div class="fit-package-head"><div class="fit-card-top fit-bg-mor"><h3 class="fit-h3 fit-color-2">Kamp</h3></div></div>');

$('.item.gtm-package-item[data-package-id="7"]').append('<div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubu</li><li class="fit-p fit-color-3">Kısa süreli denemek isteyenler için idealdir</li><li class="fit-p fit-color-3">Tek seferlik 1 aylık ödeme yapılır</li><li class="fit-p fit-color-3">Süre sonunda otomatik yenilenmez</li></ul></div>');

$('.item.gtm-package-item[data-package-id="8"]').append('<div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubu</li><li class="fit-p fit-color-3">3 aylık toplu ödeme ile indirimli fiyattan yararlanabilirsiniz</li><li class="fit-p fit-color-3">Sabit fiyatla üç ay boyunca kesintisiz erişim sağlarsınız</li><li class="fit-p fit-color-3">Süre sonunda otomatik yenilenmez</li></ul></div>');

$('div[data-package-id="8"] .item-content').css('background-color','#FF3599');

$('.item.gtm-package-item[data-package-id="13"]').append('<div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubu</li><li class="fit-p fit-color-3">Pro Paket dört haftalık kamp + dört özel bire bir diyetisyen görüşmesi içerir</li><li class="fit-p fit-color-3">Kamp başlamadan hemen önce yapılan beslenme eğitimine katılım zorunludur</li><li class="fit-p fit-color-3">Görüşme saatleri diyetisyen tarafından belirlenir ve katılım beklenir</li></ul></div>');

$('div[data-package-id="13"] .item-content').css('background-color','#FFB953');

$('.item.gtm-package-item[data-package-id="15"]').append('<div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubu</li><li class="fit-p fit-color-3">Kısa süreli denemek isteyenler için idealdir</li><li class="fit-p fit-color-3">Tek seferlik 1 aylık ödeme yapılır</li><li class="fit-p fit-color-3">Süre sonunda otomatik yenilenmez</li></ul></div>');

$('.item.gtm-package-item[data-package-id="16"]').append('<div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubu</li><li class="fit-p fit-color-3">3 aylık toplu ödeme ile indirimli fiyattan yararlanabilirsiniz</li><li class="fit-p fit-color-3">Sabit fiyatla üç ay boyunca kesintisiz erişim sağlarsınız</li><li class="fit-p fit-color-3">Süre sonunda otomatik yenilenmez</li></ul></div>');

$('div[data-package-id="16"] .item-content').css('background-color','#FF3599');

$('.item.gtm-package-item[data-package-id="17"]').append('<div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubu</li><li class="fit-p fit-color-3">Kısa süreli denemek isteyenler için idealdir</li><li class="fit-p fit-color-3">Tek seferlik 1 aylık ödeme yapılır</li><li class="fit-p fit-color-3">Süre sonunda otomatik yenilenmez</li></ul></div>');

$('.item.gtm-package-item[data-package-id="18"]').append('<div class="fit-card-botton"><ul><li class="fit-p fit-color-3 fit-bold">16 Mart Grubu</li><li class="fit-p fit-color-3">3 aylık toplu ödeme ile indirimli fiyattan yararlanabilirsiniz</li><li class="fit-p fit-color-3">Sabit fiyatla üç ay boyunca kesintisiz erişim sağlarsınız</li><li class="fit-p fit-color-3">Süre sonunda otomatik yenilenmez</li></ul></div>');

$('div[data-package-id="18"] .item-content').css('background-color','#FF3599');

});
</script>

<script>
$(document).ready(function() {

let speed = 0.5; // px/frame -> hızı buradan değiştir (ör: 0.5 = yavaş, 3 = hızlı)
let slider = document.getElementById("instSlider");
let pos = 0;
let paused = false;

// Kaydırma animasyonu
function animate() {
  if (!paused) {
    pos -= speed;
    if (Math.abs(pos) >= slider.scrollWidth / 2) {
      pos = 0; // sonsuz döngü
    }
    slider.style.transform = `translateX(${pos}px)`;
  }
  requestAnimationFrame(animate);
}
animate();

// Mouse üzerine gelince durdur
slider.parentElement.addEventListener("mouseenter", () => paused = true);
slider.parentElement.addEventListener("mouseleave", () => paused = false);

});

$(document).ready(function() {
    $('.stripe-fitkultur').on('click', function(e) {
        if (!$('body').hasClass('loggedIn')) {
            e.preventDefault();
            
            const returnUrl = $(this).attr('href');
            const alertHtml = `<div class="alert alert-info">Paketlerimizden faydalanabilmek için <strong><a href="/login?return=${returnUrl}">üye girişi</a></strong> yapmanız gerekmektedir. Lütfen giriş yapıp tekrar deneyin!</div>`;

$('.page').addClass('flex');
$('.page').css('justify-content','center');
$('.page').css('align-items','center');
$('.page .container').css('max-width','1140px');

            
            $('.page .container').html(alertHtml);
 $('html, body').animate({ scrollTop: 0 }, 500);
        }
    });
});

</script>

<script type="text/javascript">!function(){ var e=document.createElement("script");e.type="text/javascript",e.async=!0; var t="https://statics2.kudobuzz.com/widget-loader.min.js";e.src=t;document.getElementsByTagName("head")[0].appendChild(e); window.Kudos={ServerName: "https://statics2.kudobuzz.com/", aid:"6224bc5351a2191595de0140", hideNeptune:false, apiKey: "594a28ac7dc86ea1240e0f43", WidgetServer: "https://widget.kudobuzz.com/", apiServer:"https://api.kudobuzz.com" }}()</script>
<script>
$(window).on('load', function() {
    setTimeout(function() {
        $('head').append(`
            <style>
            #kudobuzz_neptune_widget .wrapper {
            padding-top:unset !important;
            }

            .neptune-btn__wrapper  {
            margin:unset !important;
            }
            </style>
        `);
    }, 1500);
});
</script>

<script>

$(document).ready(function() {

$('.svelte-1bnisx4 .wrapper').addClass('fit-kod-none');
});
</script>

<script type="text/javascript">
    (function () {
        var options = {
            whatsapp: "905456776882", // WhatsApp numarası
            call_to_action: "Merhaba, nasıl yardımcı olabilirim?", // Görüntülenecek yazı
            position: "right", // Sağ taraf için 'right' sol taraf için 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
</script>



<script>

$(document).ready(function(){
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
});

</script>

<!-- Meta Pixel Code -->


<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1561998121410149');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1561998121410149&ev=PageView&noscript=1"
/></noscript>


<!-- End Meta Pixel Code -->

<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-47500K8E2H"></script> <script>   window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-47500K8E2H'); </script>


<script>
$(document).ready(function () {

    $(".youtube-link").on("click", function (e) {
        e.preventDefault(); 

        let url = $(this).attr("href");

        
        let videoId = url.split("v=")[1];
        let embedUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

        $("#youtubeFrame").attr("src", embedUrl);
        $("#videoModal").css("display", "flex");
    });

    $("#closeModal, #videoModal").on("click", function () {
        $("#videoModal").hide();
        $("#youtubeFrame").attr("src", ""); 
    });

});
</script>

<script type="text/javascript">     (function(c,l,a,r,i,t,y){         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);     })(window, document, "clarity", "script", "v9etmh92jm"); </script>

