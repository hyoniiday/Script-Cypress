describe('룰렛 이벤트 참여하기', function () {
/*
        it('정상적인 아이디로 로그인', function () {
            // 사이트 접속
            // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요
    
            cy.visit('https://fastcampus.co.kr/event_online_roulette')
    
            //로그인 페이지로 이동하는 PATH
            cy.contains('로그인').click()
            cy.contains('이메일로 시작하기').click()
    
            // 이메일을 입력한다. 
            // DB에서 가져오는 구조로 구현 필요
            cy.get('input[name=email]')
                .type('jihyeon.lee@fastcampus.co.kr', {
                    delay: 100
                })
                .should('have.value', 'jihyeon.lee@fastcampus.co.kr')
    
            // 비밀번호를 입력한다.
            // DB에서 가져오는 구조로 구현 필요
            cy.get('input[name=password]')
                .type('test1234!')
                
            //로그인 버튼을 누른다.
            cy.get('.btn').click()
        })
*/
        it('룰렛이벤트 이동', function () {
            //cy.visit('/')
            //cy.wait(2000)
            //cy.get('#nav > div:nth-child(5) > div > a.nav-banner.nav-banner').click({force: true})
            cy.visit('/'+'event_online_roulette')
            cy.get('.spin-button__background').click({force: true})
                        //cy.scrollTo('bottom')
        })
    

        it('한번 더 로그인', function () {
        cy.contains('이메일로 시작하기').click()
    
        // 이메일을 입력한다. 
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=email]')
            .type('jihyeon.lee@fastcampus.co.kr', { delay: 10 })
            .should('have.value', 'jihyeon.lee@fastcampus.co.kr')
    
        // 비밀번호를 입력한다.
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=password]')
            .type('test1234!')
    
        //로그인 버튼을 누른다.
        cy.get('.btn').click()

        //룰렛 참여하기
        cy.get('.spin-button__background').click({force: true})
        })
    })