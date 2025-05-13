document.addEventListener('DOMContentLoaded', function() {
    initDolphinFileManager();
    // 2초 후에도 초기화 시도 (페이지 로딩 타이밍 문제 대비)
    setTimeout(initDolphinFileManager, 2000);
});

function initDolphinFileManager() {
    console.log("Initializing Dolphin File Manager...");
    const fileItems = document.querySelectorAll('.file-item');
    const fileViewer = document.querySelector('.file-viewer');
    const fileContent = document.querySelector('.file-content');
    const closeBtn = document.querySelector('.close-btn');
    
    fileItems.forEach(item => {
        item.addEventListener('click', function() {
            const professor = this.getAttribute('data-professor');
            console.log("Clicked on professor:", professor);
            showProfessorMessage(professor, fileViewer, fileContent);
        });
    });
    
    closeBtn.addEventListener('click', function() {
        fileViewer.style.display = 'none';
    });
    
    console.log("Initialization complete. File items found:", fileItems.length);
}

function showProfessorMessage(professor, fileViewer, fileContent) {
    console.log("Showing message for professor:", professor);
    let message = "";
    
    switch(professor) {
        case "김성익":
            message = "김성익 교수님께,\n\n교수님의 열정적인 가르침에 깊은 감사를 드립니다. 교수님의 눈높이 강의는 어떻게 프로그램이 동작하고 프로젝트가 진행되는지 이해하는 데 큰 도움이 되었습니다. 뿐만 아니라, 적합한 교내 행사(프레젠테이션 대회 등)를 소개해주심으로써 좋은 경험을 쌓을 수 있었습니다.\n\n이러한 기회를 주신 것에 다시 한번 감사드립니다.\n\nAI소프트웨어학과 제자 박성진 드림";
            break;
        case "김문정":
            message = "김문정 교수님께,\n\n네트워크의 기초를 배우면서 실제 관련 프로젝트를 할 때에 큰 도움을 받았습니다. 특히나 운영체제를 배운 것이 후에 다른 것을 배울 때에 큰 도움을 얻을 수 있었습니다. 덕분에 리눅스 등의 개념도 쉽게 이해할 수 있었습니다.\n\nCS 기본을 탄탄하게 다질 수 있게 도와주신 교수님께 감사의 마음을 전합니다.\n\nAI소프트웨어학과 제자 박성진 드림";
            break;
        case "정선미":
            message = "정선미 교수님께,\n\n애플리케이션 관련 개인 프로젝트 과제를 진행하면서 그간 경험이 부족하고 그로 인해 가졌던 짧은 시야를 교수님의 과제를 진행하면서 조금이나마 넓게 바라볼 수 있는 시각을 얻을 수 있었습니다. 교수님의 프로젝트 중심 수업은 무엇을 만들고 싶은지를 구상하고 그것을 설계하고 구현해보는 데에 큰 도움이 되었습니다. 그 과정에서 겪은 여러 문제와 그것을 해결하면서 얻은 경험들은 무척 값진 것이었습니다.\n\n성장의 발판을 마련해 주신 교수님께 다시 한번 감사드립니다.\n\nAI소프트웨어학과 제자 박성진 드림";
            break;
        case "김재홍":
            message = "김재홍 교수님께,\n\n제게 잘 알지 못했었던 알고리즘과 데이터베이스에 대해서 이해할 수 있는 수업을 해주신 김재홍 교수님께 감사드립니다. 교수님의 알고리즘 수업을 바탕으로 실제로 AI를 설계할 때에 선정에 큰 도움을 얻었습니다. 교수님의 자격증을 염두에 두고 수업을 해주신 덕분에 그 부분으로도 현재 도움을 받고 있습니다.\n\n제 진로를 격려해주시고 나아갈 길을 찾는데에 도움을 주신 김재홍 교수님께 진심으로 감사드립니다.\n\nAI소프트웨어학과 제자 박성진 드림";
            break;
        case "박충식":
            message = "박충식 교수님께,\n\n" +
                    "새로운 분야에 도전할 수 있는 길과 기회를 열어주셔서 진심으로 감사드립니다.\n" +
                    "교수님의 관심과 따뜻한 지도 덕분에 빠르게 성장할 수 있었고, 그 과정에서 많은 것을 배우고 있습니다.\n\n" +
                    "또한, 늘 흥미롭고 도전적인 주제를 제안해주시고 함께 논의할 수 있는 기회를 주셔서 정말 감사드립니다.\n" +
                    "그 시간들은 저에게 큰 동기부여이자 즐거움이었습니다.\n\n" +
                    "저를 더 나은 개발자로 이끌어주시고 늘 격려해주신 교수님께 깊이 감사드리며,\n" +
                    "앞으로도 더욱 성장하는 제자가 되도록 노력하겠습니다.\n\n" +
                    "AI소프트웨어학과 제자 박성진 드림";
            break;

        default:
            message = "교수님께 감사의 마음을 전합니다.";
    }
    
    fileContent.textContent = message;
    fileViewer.style.display = 'block';
}

// 페이지가 완전히 로드된 후 또는 terminal 명령어가 실행된 후에도 이벤트 리스너 초기화
setTimeout(function() {
    const output6 = document.getElementById('output-6');
    if (output6) {
        console.log("Re-initializing after terminal command execution");
        initDolphinFileManager();
    }
}, 3000); 