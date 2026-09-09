export type EventsSchemaNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaNodeStateMachine {
  private allowedTransitions: Record<EventsSchemaNodeState, EventsSchemaNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaNodeState, to: EventsSchemaNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaNodeState, to: EventsSchemaNodeState): EventsSchemaNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaNode: " + from + " -> " + to);
    }
    return to;
  }
}
