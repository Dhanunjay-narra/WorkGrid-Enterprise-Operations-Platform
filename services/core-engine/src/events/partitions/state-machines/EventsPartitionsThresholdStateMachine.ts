export type EventsPartitionsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsThresholdStateMachine {
  private allowedTransitions: Record<EventsPartitionsThresholdState, EventsPartitionsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsThresholdState, to: EventsPartitionsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsThresholdState, to: EventsPartitionsThresholdState): EventsPartitionsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
