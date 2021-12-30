export class Users
{
    p_name : string;
    p_id : string;
    p_cost : string;
    p_availability : string;
    p_details : string;
    p_category : string;

    constructor(p_name, p_id, p_cost, p_availability, p_details, p_category)
    {
        this.p_name = p_name;
        this.p_id = p_id;
        this.p_cost = p_cost;
        this.p_availability = p_availability;
        this.p_details = p_details;
        this.p_category = p_category;
    }

}