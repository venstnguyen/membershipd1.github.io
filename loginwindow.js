class loginwindow {
    constructor(bakeryloginog) {
      this.frame = new JFrame();
      this.loginButton = new JButton('Let\'s Bake!');
      this.userField = new JTextField();
      this.passwordField = new JPasswordField();
      this.userLabel = new JLabel('User:');
      this.passwordLabel = new JLabel('Password:');
      this.correctMessageLabel = new JLabel('');
      this.wrongMessageLabel = new JLabel('');
      this.bakerylogin = new HashMap();
  
      this.bakerylogin = bakeryloginog;
      this.userLabel.setBounds(50, 100, 75, 25);
      this.passwordLabel.setBounds(50, 150, 75, 25);
      this.correctMessageLabel.setBounds(125, 250, 250, 35);
      this.correctMessageLabel.setFont(new Font(null, Font.ITALIC, 25));
      this.wrongMessageLabel.setBounds(125, 250, 250, 35);
      this.wrongMessageLabel.setFont(new Font(null, Font.ITALIC, 18));
      this.userField.setBounds(125, 100, 200, 25);
      this.passwordField.setBounds(125, 150, 200, 25);
      this.loginButton.setBounds(125, 200, 100, 25);
      this.loginButton.addActionListener(this);
      this.frame.add(this.userLabel);
      this.frame.add(this.passwordLabel);
      this.frame.add(this.correctMessageLabel);
      this.frame.add(this.wrongMessageLabel);
      this.frame.add(this.userField);
      this.frame.add(this.passwordField);
      this.frame.add(this.loginButton);
      this.frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      this.frame.setSize(500, 500);
      this.frame.setLayout(null);
      this.frame.setVisible(true);
    }
    actionPerformed(e) {
      if (e.getSource() === this.loginButton) {
        let userID = this.userField.getText();
        let password = String.valueOf(this.passwordField.getPassword());
        if (this.bakerylogin.containsKey(userID)) {
          if (this.bakerylogin.get(userID).equals(password)) {
            this.correctMessageLabel.setForeground(Color.green);
            this.correctMessageLabel.setText('Login Successful');
            let popuppage = new Popuppage();
          } else {
            this.wrongMessageLabel.setForeground(Color.red);
            this.wrongMessageLabel.setText('Wrong Password');
          }
        } else {
          this.wrongMessageLabel.setForeground(Color.red);
          this.wrongMessageLabel.setText('Incorrect user name');
        }
      }
    }
  }