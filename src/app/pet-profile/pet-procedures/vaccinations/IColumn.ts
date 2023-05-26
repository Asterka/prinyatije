export interface IColumn {
 /*Поле*/
 field: string,
 tooltip?: string,
 /*Заголовок*/
 header: string,
 /*Применяемый класс для заголовка колонки*/
 thclass?: string,
 /*Стили заголовка колонки*/
 thstyle?: string,
 /*Применяемый класс для ячейки в строке*/
 tdclass?: string,
 /*Стили ячейки в строке*/
 tdstyle?: string
}
