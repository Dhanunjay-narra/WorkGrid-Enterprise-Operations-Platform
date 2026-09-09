export type IntFieldMappingSchemaState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntFieldMappingSchemaStateMachine {
  private validTransitions: Record<IntFieldMappingSchemaState, IntFieldMappingSchemaState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntFieldMappingSchemaState, next: IntFieldMappingSchemaState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntFieldMappingSchemaState, next: IntFieldMappingSchemaState): IntFieldMappingSchemaState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntFieldMappingSchema: from " + current + " to " + next);
    }
    return next;
  }
}
