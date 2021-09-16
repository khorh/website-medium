import {BsBookmarkPlus} from "react-icons/bs";
import {IoMdStar} from "react-icons/io";

const IconMembersOnlyContent = () => {
    return (
        <>
            <IoMdStar fill={"#757575"} />
        </>
    );
};

const IconBookmark = () => {
    return (
        <>
            <BsBookmarkPlus size={20} fill={"#757575"} />
        </>
    );
};

export {IconMembersOnlyContent, IconBookmark};
