describe('공지사항 이동', function () {

    it('페이지 이동하여 공지사항 이동', function () {

        cy.visit('/')
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.contains('공지사항').click()
    
        //공지사항 페이지인지 확인 should
        cy.get('h2.vn-section__title').should('contain','공지사항')
    })

})