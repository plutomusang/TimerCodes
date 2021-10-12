import {useState, useEffect} from "react"

export interface Timeline {
    documentId:      number;
    documentNumber:  string;
    releasingNumber: string;
    isCompleted:     boolean;
    documentType:    string;
    dateCreated:     string;
    dateCompleted:   string;
    agingNumber:     string;
    timelineData:    TimelineDatum[];
}

export interface TimelineDatum {
    personName:      string;
    description:     string;
    timeRecieved:    string;
    timeReleased:    string;
    documentStatus:  boolean;
    isLastItem:      boolean;
    documentTrackId: number;
}


function useFetchData<Payload>(url:string): {
    data: Payload | null;
    done: boolean;
} {
    const[data, dataSet] = useState<Payload| null>(null);
    const[done, doneSet] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then((d: Payload) => {
                dataSet(d);
                doneSet(true);
            })
    },[url])

    return {
        data,
        done,
    };

}

function CustomHookComponent() {
    const {data, done} = useFetchData<Timeline[]>("/timeline.json");
    return (
        <div>
            {done && (
                <div>{data![0].timelineData[1].personName}</div>
            )}
        </div>
    )
}

export default CustomHookComponent;