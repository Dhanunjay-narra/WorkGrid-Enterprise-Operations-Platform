export type EvtDomainEventSchemaState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtDomainEventSchemaStateMachine {
  private validTransitions: Record<EvtDomainEventSchemaState, EvtDomainEventSchemaState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtDomainEventSchemaState, next: EvtDomainEventSchemaState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtDomainEventSchemaState, next: EvtDomainEventSchemaState): EvtDomainEventSchemaState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtDomainEventSchema: from " + current + " to " + next);
    }
    return next;
  }
}
