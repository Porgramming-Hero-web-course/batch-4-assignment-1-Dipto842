                                    <!-- Union Types (|) -->

<!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

      Union types allow a variable to hold one of multiple types. allowing you to handle multiple scenarios with type safety


                                               <!-- Examples of union Types: -->
                                                <!-- ------------------------ -->

                                     type UnionTypes = string |number

                                <!-- function ExamplesofUnionTypes(examplesofUnionTypes: UnionTypes):string|number{
                                return examplesofUnionTypes
                                }

                                const ExamplesofUnionTypesString = ExamplesofUnionTypes('will return a string ')
                                const ExamplesofUnionTypesNumber = ExamplesofUnionTypes(12)

                                console.log(ExamplesofUnionTypesString);
                                console.log(ExamplesofUnionTypesNumber); -->

                    <!------------------------------------------------------------------------->
                      From those examples I understand that  Union Types provide flexibility by allowing multiple possible types, helping manage varying input types.

<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

                                                        <!-- Intersection Types(&) -->

                                      <!-- Intersection types combine multiple types, for which a value must satisfy all specified types -->


                                                 <!-- Examples of Intersection  Types: -->
                                                    <!-- -------------------------->

                                                     interface User {
                                                                name :string
                                                                namebar:number
                                                                }

                                                            interface Students {
                                                                Id:string|number
                                                                class:number
                                                            }
                                                            type UserAndStudendt = User & Students

                                                            const studenst :UserAndStudendt ={
                                                                Id:456,
                                                                name: 'Dipto',
                                                                namebar:235456526253,
                                                                class:9,
                                                            }
                               <!------------------------------------------------------------------------->
             From those examples I understand that Intersection Types allow type combinations, ensuring an object conforms to multiple type requirements.
<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->