const Heap = require("../src/Sort");
const { expect } = require("chai");

let heap;
describe("Heap", () => {
  beforeEach(() => {
    heap = new Heap();
  });

  it("should be a function", () => {
    expect(Heap).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Heap.prototype.sort).to.be.a("function");
  });

  it("should have inset method", () => {
    expect(heap.insert).to.be.a("function");
  });

  it("should return an array", () => {
    const one = 1;
    const two = 2;
    heap.insert(one);
    heap.insert(two);
    expect(heap.array[0]).to.be.equal(1);
    expect(heap.array[1]).to.be.equal(2);
  });

  it("should swap its parents value and child value if parents value is bigger than its child value", () => {
    const one = 1;
    const two = 2;
    const three = 3;
    heap.insert(two);
    heap.insert(three);
    heap.insert(one);
    expect(heap.array[0]).to.be.equal(1);
    expect(heap.array[1]).to.be.equal(3);
    expect(heap.array[2]).to.be.equal(2);
  });

  it("should remove first node from array, bring the last element to index 0, and sort the array", () => {
    const one = 1;
    const four = 4;
    const three = 3;
    heap.insert(three);
    heap.insert(four);
    heap.insert(one);
    let test = heap.remove();
    expect(test).to.be.equal(1);
    expect(heap.array[0]).to.be.equal(3);
    expect(heap.array[1]).to.be.equal(4);
    expect(heap.array.length).to.be.equal(2);
  });

  it("should remove first node from array, bring the last element to index 0, and sort the array", () => {
    const nine = 9;
    const four = 4;
    const eleven = 11;
    const twelve = 12;
    const ten = 10;
    const five = 5;
    const three = 3;
    heap.insert(nine);
    heap.insert(four);
    heap.insert(eleven);
    heap.insert(twelve);
    heap.insert(ten);
    heap.insert(five);
    heap.insert(three);
    let test = heap.remove();
    expect(test).to.be.equal(3);
    expect(heap.array[0]).to.be.equal(4);
    expect(heap.array[1]).to.be.equal(9);
    expect(heap.array[2]).to.be.equal(5);
    expect(heap.array.length).to.be.equal(6);
    expect(heap.array).to.eql([4, 9, 5, 12, 10, 11]);
  });

  // it("should remove the first element of an array", ()=> {
  //   const one = 1;
  //   const two = 2;
  //   const three = 3;
  //   heap.insert(one);
  //   heap.insert(two);
  //   heap.insert(three);
  //   heap
  // });
});
