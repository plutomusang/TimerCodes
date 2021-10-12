export default class  ParseTime {
    public  parser(elapsed: number) :string[] {
        let units: number[] = [3600000,60000,1000];
        let time: string[] = [];
        let index: number = 0;
        while (index < units.length) {
            let t: number = Math.floor(elapsed/units[index]);
            elapsed -= t*units[index];
            let st:string = (index > 0 && t < 10) ?  '0' + t : t.toString();
            time.push(st);
            index++;
        }
        return time;

    }
}