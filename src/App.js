import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import Rectangle from './Rectangle/Rectangle';
import UserInput from './UserInput/UserInput';

class App extends Component
{
  state = {
    nums: [
      {id: 0, val: 10},
      {id: 1, val: 20},
      {id: 2, val: 3},
      {id: 3, val: 50},
      {id: 4, val: 8},
      {id: 5, val: 6},
      {id: 6, val: 6},
      {id: 7, val: 8},
      {id: 8, val: 9},
      {id: 9, val: 10}
    ],
    algoVal : "0",
    canSort : true,
    speed: 300
  };
  delay = (ms,nums)=> {
    return new Promise((resolve) => {
      this.setState({nums:nums});
      setTimeout(resolve, ms)});
  }
  bubbleSortHandler = async () => {
    let nums = [...this.state.nums];
    console.log(nums);
    for (let i = 0; i < nums.length-1; i++) {
      let flag = 0;
      for(let j=0;j<nums.length-1-i;j++)
      {
        if(nums[j].val>nums[j+1].val)
          {
            let temp = nums[j].val;
            nums[j].val = nums[j+1].val;
            nums[j+1].val = temp;
            flag=1;
            await this.delay(this.state.speed,nums);
          }
      }
      if(flag===0)
      {
        break;
      }
    }
    alert('Sorted!');
  }
  insertionSortHandler = async () => {
    alert('Note: In Insertion Sort, for visual purposes, the value at a particular index is not directly placed at it\'s optimal position');
    let nums = [...this.state.nums];
    let j = 0;
    let x = 0;
    for (let i = 1; i < nums.length; i++) {
      j = i-1;
      x = nums[i].val;
      while(j>-1 && nums[j].val>x)
      {
        nums[j+1].val = nums[j].val;
        nums[j].val = x;
        await this.delay(this.state.speed,nums);
        j--;
      }
    }
    alert('Sorted!');
  }
  selectionSortHandler = async () => {
    let nums = [...this.state.nums];
    let i = 0;
    let j = 0;
    let k = 0;
    for (i = 0; i < nums.length-1; i++) {
      k = i;
      for (j= i; j < nums.length; j++) {
        if(nums[j].val<nums[k].val)
        {
          k = j;
        }
      }
      let temp = nums[i].val;
      nums[i].val = nums[k].val;
      nums[k].val = temp;
      await this.delay(this.state.speed,nums);
    }
    alert('Sorted!');
  }
  merge = async (nums, l, m, r) => {
    let i, j, k; 
    let n1 = m - l + 1; 
    let n2 =  r - m; 
  
    let L = [];
    let R = [];
  
    for (i = 0; i < n1; i++) 
    {
      L.push(Number(nums[l + i].val)); 
    }
    for (j = 0; j < n2; j++) 
    {
      R.push(Number(nums[m + 1+ j].val)); 
    }
  
    i = 0; 
    j = 0; 
    k = l; 
    while (i < n1 && j < n2) 
    { 
      if (L[i] <= R[j]) 
      { 
        nums[k].val = L[i]; 
        i++; 
      } 
      else
      { 
        nums[k].val = R[j]; 
        j++; 
      } 
      k++; 
      await this.delay(this.state.speed,nums);
    } 

    while (i < n1) 
    { 
      nums[k].val = L[i]; 
      i++; 
      k++; 
      await this.delay(this.state.speed,nums);
    } 
    while (j < n2) 
    { 
      nums[k].val = R[j]; 
      j++; 
      k++; 
      await this.delay(this.state.speed,nums);
    } 
  }
  mergeSortHandler = async () => {
    let nums = [...this.state.nums];
    let n = nums.length;
    let curr_size;
    let left_start;
    for (curr_size=1; curr_size<=n-1; curr_size = 2*curr_size) 
    { 
      for (left_start=0; left_start<n-1; left_start += 2*curr_size) 
      { 
        let mid = Math.min(left_start + curr_size - 1, n-1); 
        let right_end = Math.min(left_start + 2*curr_size - 1, n-1); 
        await this.merge(nums, left_start, mid, right_end); 
      }
    } 
    alert('Sorted!');
  }
  partition = async (nums, l, h) => {
    let x = nums[h].val; 
    let i = (l - 1); 
  
    for (let j = l; j <= h - 1; j++) { 
      if (nums[j].val <= x) { 
        i++; 
        let temp = nums[i].val;
        nums[i].val = nums[j].val;
        nums[j].val = temp;
        await this.delay(this.state.speed,nums);
      } 
    } 
    let temp = nums[i+1].val;
    nums[i+1].val = nums[h].val;
    nums[h].val = temp;
    await this.delay(this.state.speed,nums);
    return (i + 1); 
  }
  quickSortHandler = async () => {
    let nums = [...this.state.nums];
    let h = nums.length-1;
    let l=0;

    let stack = [];
    let top = -1; 
    stack[++top] = l; 
    stack[++top] = h; 
  
    while (top >= 0) { 
      h = stack[top--]; 
      l = stack[top--]; 

      let p = await this.partition(nums, l, h); 

      if (p - 1 > l) { 
        stack[++top] = l; 
        stack[++top] = p - 1; 
      } 
      if (p + 1 < h) { 
        stack[++top] = p + 1; 
        stack[++top] = h; 
      } 
    }
    alert('Sorted!'); 
  }
  algorithmExecutionHandler = async (event) => {
    let canSort = this.state.canSort;
    this.setState({canSort:!canSort});
    const algoVal = this.state.algoVal;
    if(algoVal === "0")
    {
      await this.bubbleSortHandler();
    }
    else if(algoVal === "1")
    {
      await this.insertionSortHandler();
    }
    else if(algoVal === "2")
    {
      await this.selectionSortHandler();
    }
    else if(algoVal === "3")
    {
      await this.mergeSortHandler();
    }
    else if(algoVal === "4")
    {
      await this.quickSortHandler();
    }
    this.setState({canSort:canSort});
  }
  algorithmSelectionHandler = (event) => {
    let newAlgo = event.target.value;
    this.setState({algoVal:newAlgo});
  }
  inputChangedHandler = (event) => {
    
    const val = event.target.value;
    const valArr = val.split(',');
    for(let i=0;i<valArr.length;i++)
    {
      if(valArr.length > 20 || isNaN(Number(valArr[i])) || Number(valArr[i])<0 || Number(valArr[i])>50)
      {
        alert('Invalid input. Please provide values seperated by comma. Constraints: 0<=A[i]<=50 and length of array should be no more than 20.');
        this.setState({nums:[{id:0, val:0}]});
        event.target.value = 0;
        return;
      }
    }
    const newNums = valArr.map((v,index) => {
      return {id: index, val: (v==='')?0:Number(v)};
    });
    this.setState({nums:newNums});
  }
  slowDownHandler = () => {
    this.setState({speed:500});
  }
  speedUpHandler = () => {
    this.setState({speed:100});
  }
  render()
  {
    const style = {
      margin : '10px auto',
      width: '50%'
    };
    
    let rect = (
      <div style={style}>
        {this.state.nums.map((v) => {
          return <Rectangle val={v.val} key={v.id} />
        })}
      </div>
    )
    return (
      <div className="App">
        <NavigationBar 
          algoVal={this.state.algoVal} 
          sort={(event) => this.algorithmExecutionHandler(event)}
          algo={(event) => {this.algorithmSelectionHandler(event)}}
          canSort={!this.state.canSort}
          slowDown={this.slowDownHandler}
          speedUp={this.speedUpHandler} />
          <UserInput 
            change={this.inputChangedHandler} />
        {rect}
      </div>
    );
  }
}

export default App;
