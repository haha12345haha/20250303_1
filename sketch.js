let input;
let slider;
let sliderLabel;
let button;
let dropdown;
let isBouncing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput('123');
  input.position(10, 10);
  slider = createSlider(28, 50, 32);
  slider.position(input.x + input.width + 80, 10);
  sliderLabel = createDiv('文字大小');
  sliderLabel.position(input.x + input.width + 10, 10);
  button = createButton('開始跳動');
  button.position(slider.x + slider.width + 10, 10);
  button.mousePressed(toggleBounce);
  dropdown = createSelect();
  dropdown.position(button.x + button.width + 10, 10);
  dropdown.option('第一周');
  dropdown.option('第二周');
  dropdown.option('第三周');
  dropdown.changed(goToLink);
}

function draw() {
  background(230, 230, 250); // 淡紫色
  textSize(slider.value());
  let inputText = input.value();
  for (let y = 0; y < height; y += 150) {
    for (let x = 0; x < width; x += 150) {
      let offsetY = isBouncing ? sin((x + y + frameCount) * 0.05) * 10 : 0;
      text(inputText, x, y + offsetY);
    }
  }
}

function toggleBounce() {
  isBouncing = !isBouncing;
}

function goToLink() {
  let selected = dropdown.value();
  if (selected === '第一周') {
    window.open('https://www.tku.edu.tw', '_blank');
  } else if (selected === '第二周') {
    window.open('https://www.et.tku.edu.tw', '_blank');
  } else if (selected === '第三周') {
    window.open('https://hackmd.io/@js3F4of_SFq4DeD0skSy-w/HyavqFGi1x', '_blank');
  }
}
