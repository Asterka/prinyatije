/**
 * pet-passport
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ClinicalExaminationDto } from './clinicalExaminationDto';
import { Paging } from './paging';


export interface PageDtoClinicalExaminationDto { 
    content?: Array<ClinicalExaminationDto>;
    paging?: Paging;
    pageSize?: number;
    pageNumber?: number;
}
