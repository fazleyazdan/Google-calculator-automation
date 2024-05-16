import pageObject from "../page_objects/elements_page"
import Digits from "../page_objects/numeric";

let numbers = new Digits()
const Operators = {
    '+': 'XSr6wc',
    '-': 'pPHzQc',
    'x': 'YovRWb',
    '÷': 'WxTTNd',
    '=': 'Pt8tGc',
    'AC': 'j93WEe',
    '.': 'YrdHyf',
    '0': 'bkEvMb',
    '1': 'N10B9',
    '2': 'lVjWed',
    '3': 'KN1kY',
    '4': 'xAP7E',
    '5': 'Ax5wH',
    '6': 'abcgof',
    '7': 'rk7bOd',
    '8': 'T7PMFe',
    '9': 'XoxYJ'
  }
  
  describe('Google Calculator Functionality', () => {
    beforeEach(() => {
      // Visit the Google calculator page
      cy.visit('https://www.google.com/search?q=calculator');

      // by default the view port in cypress is (1000, 600): i have expanded the screen so that everything can be displayed.
      cy.viewport(1280, 800);

    });
  
    it('should only have the specified buttons', () => {
      // Check for presence of each specified button
      cy.get('.PaQdxb.mF5fo').then(() => {
        for (const key in Operators) {
          const operatorClass = Operators[key];
          cy.get(`[jsname="${operatorClass}"]`).should('exist');
        }
      });
    });
  
    it('should display numbers when number buttons are clicked', () => {
      // Click buttons 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
      numbers.one()// 1
      numbers.two()// 2
      numbers.three(); // 3
      numbers.four() // 4
      numbers.five()// 5
      numbers.six()// 6
      numbers.seven(); // 7
      numbers.eight(); // 8
      numbers.nine() // 9
      numbers.zero() // 0
  
      // Check the display shows the correct sequence
      numbers.inputField()
    });
  });
  