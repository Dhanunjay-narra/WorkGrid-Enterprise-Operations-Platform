export const CommCallRoomTypeDefs = `
  type CommCallRoom {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommCallRoom(id: ID!): CommCallRoom
    listCommCallRooms(tenantId: String!): [CommCallRoom!]!
  }
`;

export const CommCallRoomResolvers = {
  Query: {
    getCommCallRoom: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommCallRoom", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommCallRooms: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommCallRoom", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
