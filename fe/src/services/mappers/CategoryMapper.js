class CategoryMapper {
//   toPersistence(domainCategory) {
//     return {
//       id: domainContact.id,
//       name: domainContact.name,
//       email: domainContact.email,
//       phone: domainContact.phone,
//       category_id: domainContact.categoryId,
//     };
//   }

  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
