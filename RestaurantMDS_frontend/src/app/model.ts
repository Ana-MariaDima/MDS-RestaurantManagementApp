export class Model {
   static SIGNATURE_START_FLAG = "//signature-start :: sep=;"
   static SIGNATURE_STOP_FLAG = "//signature-end";
   getReadOnly():string[]{return []};
   getDepthFields():string[]{return []};
}
