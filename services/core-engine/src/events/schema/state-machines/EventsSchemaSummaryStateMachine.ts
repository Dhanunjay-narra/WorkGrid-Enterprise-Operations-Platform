export type EventsSchemaSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaSummaryStateMachine {
  private allowedTransitions: Record<EventsSchemaSummaryState, EventsSchemaSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaSummaryState, to: EventsSchemaSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaSummaryState, to: EventsSchemaSummaryState): EventsSchemaSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaSummary: " + from + " -> " + to);
    }
    return to;
  }
}
