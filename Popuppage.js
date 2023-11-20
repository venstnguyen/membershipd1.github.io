class Popuppage {
    constructor() {
      this.frame = new JFrame();
      this.infoLabel = new JLabel('Member\'s IDs');
      this.idLabel = new JLabel('Steven N = 0612');
      this.id2Label = new JLabel('Andrea W = 4014');
      this.id3Label = new JLabel('Katie = 7502');
      this.id4Label = new JLabel('Araceli S = 9839');
      this.id5Label = new JLabel('Adrian = 2308');
  
      this.infoLabel.setBounds(0, 0, 200, 35);
      this.infoLabel.setFont(new Font(null, Font.PLAIN, 25));
      this.idLabel.setBounds(0, 20, 200, 35);
      this.idLabel.setFont(new Font(null, Font.PLAIN, 10));
      this.id2Label.setBounds(0, 40, 200, 35);
      this.id2Label.setFont(new Font(null, Font.PLAIN, 10));
      this.id3Label.setBounds(0, 60, 200, 35);
      this.id3Label.setFont(new Font(null, Font.PLAIN, 10));
      this.id4Label.setBounds(0, 80, 200, 35);
      this.id4Label.setFont(new Font(null, Font.PLAIN, 10));
      this.id5Label.setBounds(0, 100, 200, 35);
      this.id5Label.setFont(new Font(null, Font.PLAIN, 10));
      this.frame.add(this.infoLabel);
      this.frame.add(this.idLabel);
      this.frame.add(this.id2Label);
      this.frame.add(this.id3Label);
      this.frame.add(this.id4Label);
      this.frame.add(this.id5Label);
      this.frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      this.frame.setSize(500, 500);
      this.frame.setLayout(null);
      this.frame.setVisible(true);
    }
  }