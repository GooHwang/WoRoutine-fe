import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="font-bold">WOROUTINE</div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="닉네임" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">로그아웃</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Header;
