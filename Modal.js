import {Modal} from "antd";
class Com extends React.Component{
    constructor(){
        this.simpleClass=Math.random().toString(36).substring(2);
        this.init=false;
    }
    move=event=>{
        const {top,left,right,bottom,width,height}=this.contain.getBoundingClientRect();
        const {limit=false}=this.props;
        this.contain.style.top=top+event.movementY+"px";
        this.contain.style.left=left+event.movementX+"px";
        if(limit){
            if(bottom+event.movementY>window.innerHeight)this.contain.style.top=window.innerHeight-height+"px";
            if(top+event.movementY<0)this.contain.style.top=0;
            if(right+event.movementX>window.innerWidth)this.contain.style.left=window.innerWidth-width+"px";
            if(left+event.movementX<0)this.contain.style.left=0;
        }
    }
    removeMove=()=>{
        window.removeEventListener("mousemove",this.move,false);
    }
    removeUp=()=>{
        document.body.onselectstart=()=>true;
        this.removeMove();
    }
    toTop=()=>{
        let autoIndexArr=document.getElementsByClassName("autoIndex");
        if(autoIndexArr.length<1) return false;
        let max=0;
        for(let i=0;i<autoIndexArr.length;i++){
            let zIndex=parseInt(autoIndexArr[i].style.zIndex||1000);
            if(zIndex>max) max=zIndex;
        }
        this.contain.style.zIndex=max+1;
    }
    create=(visible)=>{
        if(this.init) return false;
        const {title,dragable=true,limit=false,autoIndex=true}=this.props;
        if(title&&dragable&&visible){
            this.init=true;
            setTimeout(() => {
                this.contain=document.getElementsByClassName(this.simpleClass)[0];
                if(!autoIndex){
                    this.contain=this.contain.getElementsByClassName("ant-modal ")[0];
                    this.contain.style.paddingBottom=0;
                    this.contain.style.display="inline-block";
                }else{
                    this.contain.style.right="auto";
                    this.contain.style.overflow="visible";
                    this.contain.style.bottom="auto";
                    this.contain.addEventListener("mousedown",this.toTop,false);
                    this.toTop();
                }
                this.header=this.contain.getElementsByClassName("ant-modal-header")[0];
                this.header.style.cursor="all-scroll";
                this.header.onmousedown=()=>{
                    document.body.onselectstart=()=>false;
                    window.addEventListener("mousemove",this.move,false);
                }
                window.addEventListener("mouseup",this.removeUp,false);
            },0);
        }
    }
    componentDidMount(){
        this.create(this.props.visible);
    }
    componentWillReceiveProps({visible}){
        if(visible&&(visible!==this.props.visible)){
            this.create(visible);
            this.contain&&this.toTop();
        };
    }
    componentWillUnmount(){
        this.removeMove();
        window.removeEventListener("mouseup",this.removeUp,false);
    }
    render(){
        const {children,wrapClassName="",limit=false,dragable=true,mask,autoIndex=true,style,...other}=this.props;
        return <Modal {...other} 
            wrapClassName={`${wrapClassName} ${this.simpleClass} ${autoIndex&&"autoIndex"||""}`}
            mask={autoIndex?false:mask}
            style={autoIndex&&{
                top:0,
                left:0,
                width:"auto",
                height:"auto",
                paddingBottom:0,
                display:"inline-block"
            }||style}
        >
            {children}
        </Modal>
    }
}
export default Com;
