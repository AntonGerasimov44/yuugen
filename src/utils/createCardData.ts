import { todoElementType } from '../store/todoSlice';

export interface IStatuses {
  overdue?: number;
  'in progress'?: number;
  draft?: number;
  finished?: number;
}

export function createCardData(data: todoElementType[]) {
  const titles: string[] = [];
  const lastRecordingTime: string[] = [];
  const numberOfSubtasks: number[] = [];
  const todoStatuses: IStatuses[] = [];

  for (const item of data) {
    if (!titles.includes(item.title)) {
      titles.push(item.title);
    }
  }

  const todoInfo = titles.map((elem, index) => {
    let date = '';
    let intermediateDate = 0;
    let amountSubtasks = 0;
    const statuses: any = {
      overdue: 0,
      'in progress': 0,
      draft: 0,
      finished: 0,
    };

    data.forEach((item) => {
      if (elem === item.title) {
        if (Date.parse(item.createdAt) > intermediateDate) {
          intermediateDate = Date.parse(item.createdAt);
          date = item.createdAt;
        }
        if (elem === item.title) {
          amountSubtasks += 1;
          statuses[item.status] += 1;
        }
      }
    });
    lastRecordingTime.push(date);
    numberOfSubtasks.push(amountSubtasks);
    for (let key in statuses) {
      if (statuses[key] === 0) {
        delete statuses[key];
      }
    }
    todoStatuses.push(statuses);

    return {
      title: titles[index],
      createdAt: lastRecordingTime[index],
      amount: numberOfSubtasks[index],
      statuses: todoStatuses[index],
    };
  });

  return todoInfo;
}
