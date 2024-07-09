function generateTables() {
    const tableCount = document.getElementById('tableCount').value;  //tableCount는 입력한 테이블 수 가져옴
    const tableContainer = document.getElementById('tableContainer'); // tableContainer는 생성된 테이블을 표시할 HTML 의미
    tableContainer.innerHTML = ''; // 기존에 생성된 테이블을 초기화 해줌

    for (let i = 0; i < tableCount; i++) {
        const table = document.createElement('table'); 
        // 사용자가 입력한 숫자 만큼 반복하여 테이블을 생성해줌
        // 각 테이블을 table 이라는 변수로 지정

        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            // row는 행을 의미하며 여기서는 3개의 행으로 구성됨
            // 각 행을 tr 변수로 지정

            if (row === 0) {
                // 1행: 22열을 2칸씩 합쳐주고 각 칸에 1부터 10까지의 숫자를 차례대로 넣고 마지막 칸에 "합계"를 넣어줌
                for (let col = 0; col < 10; col++) {
                    // col은 열을 의미, 여기선 10개의 열을 의미
                    // 각 열을 td 변수로 지정
                    const td = document.createElement('td');
                    td.colSpan = 2;         // colSpan 이용해 2칸씩 합침
                    td.textContent = col + 1;       // 각 칸에 숫자 넣어줌
                    tr.appendChild(td);
                }
                const td = document.createElement('td');
                td.colSpan = 2;
                td.textContent = '합계';        // 마지막 칸에는 '합계' 넣어줌
                tr.appendChild(td);
            } else if (row === 1) {
                // 2행: 홀수 칸에 랜덤 숫자, 짝수 칸에 조건에 맞는 랜덤 숫자
                for (let col = 0; col < 20; col++) {
                    const td = document.createElement('td');
                    if (col % 2 === 0) { // 홀수 칸 (0 기반 인덱스)
                        const randomValue = Math.floor(Math.random() * 11);  // 랜덤숫자를 randomValue로 지정
                        td.textContent = randomValue;  
                        tr.appendChild(td);
                    } else { // 짝수 칸
                        const firstValue = parseInt(tr.cells[col - 1].textContent);
                        // firstValue는 홀수칸 의미, secondValue는 짝수칸 의미
                        let secondValue;
                        if (firstValue === 10) {
                            td.textContent = '';
                        } else {
                            secondValue = Math.floor(Math.random() * (10 - firstValue + 1));
                            if (firstValue + secondValue === 10) {
                                td.textContent = '/';
                            } else {
                                td.textContent = secondValue;
                            }
                        }
                        tr.appendChild(td);
                    }
                }
                // 마지막 두 칸 세로로 합침
                const td = document.createElement('td');
                td.colSpan = 2; // 가로 합침
                td.rowSpan = 2; // 세로 합침
                td.textContent = `R${row + 1} C21-22`;
                tr.appendChild(td);
            } else {
                // 3행: 22열을 2칸씩 합치기
                for (let col = 0; col < 10; col++) {
                    const td = document.createElement('td');
                    td.colSpan = 2;
                    td.textContent = '';
                    tr.appendChild(td);
                }
            }

            table.appendChild(tr);  // 생성된 각 행을 테이블에 추가함
        }

        // 3행의 각 칸에 점수 계산 결과 넣기
        const tr3 = table.rows[2];
        for (let col = 0; col < 10; col++) {
            const oddIdx = col * 2;     // 홀수 칸 Index
            const evenIdx = oddIdx + 1;     // 짝수 칸 Index 

            const oddValue = parseInt(table.rows[1].cells[oddIdx].textContent);
            // 홀수 칸 값을 oddValue로 지정 후에 값을 읽는다
            // 2번째 행의 oddIdx에 해당하는 셀의 텍스트 콘텐트는 문자열 타입이라 parseInt를 사용함
            
            const evenValue = table.rows[1].cells[evenIdx].textContent;
            // 짝수 칸 값을 evenValue로 지정 후에 값을 읽는다
            // 2번째 행의 evenIdx는 값이 '/'일 수 있으므로 parseInt는 필요없음

            let score;

            if (evenValue === '/') {    // 짝수칸이 '/'인 경우
                score = 10;
                if (col > 0) {
                    score += parseInt(tr3.cells[col - 1].textContent);
                }
                score += parseInt(table.rows[1].cells[oddIdx + 2].textContent);
            } else {    // 짝수 칸이 '/'가 아닌경우
                score = oddValue + (parseInt(evenValue) || 0);
                // 짝수 칸의 값이 정수인지 확인 후, 정수로 변환해줌
                // 짝수 칸의 값이 '/' 또는 빈 문자열이면 변환 값은 NaN 이므로 0으로 바꿔줌
                if (col > 0) {
                    score += parseInt(tr3.cells[col - 1].textContent);
                }
            }

            tr3.cells[col].textContent = score;
        }

        // 2행의 마지막 칸에 3행의 20열 값을 넣기 == 최종값 넣기
        table.rows[1].cells[20].textContent = tr3.cells[9].textContent;

        tableContainer.appendChild(table);  // 생성된 테이블을 tableContainer에 추가
    }
}