class HomePage
{

getEditBox()
{
    return cy.get("input[name='name']:nth-child(2)");
}
getGender()
{
    return cy.get('select');
}
getEntreupranour()
{
    return cy.get('#inlineRadio3');
}
}
export default HomePage;