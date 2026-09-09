export type EventsPartitionsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsRecordStateMachine {
  private allowedTransitions: Record<EventsPartitionsRecordState, EventsPartitionsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsRecordState, to: EventsPartitionsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsRecordState, to: EventsPartitionsRecordState): EventsPartitionsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
