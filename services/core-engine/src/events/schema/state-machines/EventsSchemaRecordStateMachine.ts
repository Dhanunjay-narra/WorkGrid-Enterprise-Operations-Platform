export type EventsSchemaRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaRecordStateMachine {
  private allowedTransitions: Record<EventsSchemaRecordState, EventsSchemaRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaRecordState, to: EventsSchemaRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaRecordState, to: EventsSchemaRecordState): EventsSchemaRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaRecord: " + from + " -> " + to);
    }
    return to;
  }
}
