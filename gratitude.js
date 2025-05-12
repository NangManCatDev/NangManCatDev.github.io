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
            message = "김성익 교수님께,\n\n데이터베이스와 빅데이터 분석에 대한 교수님의 열정적인 가르침에 깊은 감사를 드립니다. 교수님의 실무 중심 강의는 실제 현장에서 어떻게 데이터를 다루는지 이해하는 데 큰 도움이 되었습니다. 특히 기업 사례 연구를 통해 이론뿐만 아니라 실제 적용 방법을 배울 수 있어 정말 값진 경험이었습니다.\n\n데이터의 중요성과 그것을 통찰력 있게 분석하는 방법을 가르쳐주신 교수님께 다시 한번 감사드립니다.\n\nAI소프트웨어학과 제자 드림";
            break;
        case "김문정":
            message = "김문정 교수님께,\n\n알고리즘과 프로그래밍 기초에 대한 명확하고 체계적인 강의에 진심으로 감사드립니다. 교수님의 단계별 학습 방식 덕분에 복잡한 알고리즘 개념도 쉽게 이해할 수 있었습니다. 특히 교수님께서 수업 시간에 직접 코드를 작성하며 설명해주신 부분이 실력 향상에 큰 도움이 되었습니다.\n\n프로그래밍의 기본을 탄탄하게 다질 수 있게 도와주신 교수님께 감사의 마음을 전합니다.\n\nAI소프트웨어학과 제자 드림";
            break;
        case "정선미":
            message = "정선미 교수님께,\n\n인공지능과 머신러닝에 대한 심도 있는 강의에 깊은 감사를 드립니다. 교수님의 최신 연구 동향을 반영한 수업은 AI 분야의 최전선에서 어떤 일이 일어나고 있는지 이해하는 데 큰 도움이 되었습니다. 또한 실습 세션을 통해 실제 AI 모델을 구현하고 훈련시키는 경험은 무척 값진 것이었습니다.\n\n항상 학생들의 질문에 진지하게 답변해 주시고, AI의 미래에 대한 비전을 제시해 주신 교수님께 감사드립니다.\n\nAI소프트웨어학과 제자 드림";
            break;
        case "김재홍":
            message = "김재홍 교수님께,\n\n웹 개발과 프론트엔드 기술에 대한 실용적인 강의에 감사드립니다. 교수님의 현업 경험을 바탕으로 한 조언과 최신 트렌드를 반영한 커리큘럼은 실제 개발 현장에 바로 적용할 수 있는 귀중한 지식이었습니다. 팀 프로젝트를 통해 협업 능력과 문제 해결 능력을 기를 수 있었던 것도 큰 수확이었습니다.\n\n언제나 학생들의 창의적인 아이디어를 존중하고 격려해주신 교수님께 진심으로 감사드립니다.\n\nAI소프트웨어학과 제자 드림";
            break;
        case "박충식":
            message = "박충식 교수님께,\n\n소프트웨어 공학과 시스템 설계에 대한 체계적인 강의에 감사드립니다. 교수님의 프로젝트 중심 교육 방식은 이론과 실무를 균형 있게 배울 수 있는 좋은 기회였습니다. 특히 대규모 시스템 설계 원칙과 아키텍처 패턴에 대한 가르침은 앞으로의 개발자 경력에 큰 자산이 될 것입니다.\n\n항상 학생들이 더 나은 개발자가 될 수 있도록 격려하고 지도해주신 교수님께 깊은 감사를 표합니다.\n\nAI소프트웨어학과 제자 드림";
            break;
        case "최제영":
            message = "최제영 교수님께,\n\n컴퓨터 네트워크와 보안 시스템에 관한 깊이 있는 강의에 진심으로 감사드립니다. 교수님의 실무 경험을 바탕으로 한 사례 연구와 네트워크 구조 분석은 이론적 지식을 현실 세계에 적용하는 방법을 배우는 데 큰 도움이 되었습니다. 특히 최신 보안 위협과 대응 전략에 대한 수업은 빠르게 변화하는 IT 환경에서 필수적인 지식이었습니다.\n\n항상 학생들의 질문에 친절하게 답변해 주시고, 끊임없이 발전하는 기술 분야에서 배움의 중요성을 강조해주신 교수님께 감사의 마음을 전합니다.\n\nAI소프트웨어학과 제자 드림";
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