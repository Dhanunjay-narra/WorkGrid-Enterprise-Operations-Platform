export type EventsPartitionsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsProfileStateMachine {
  private allowedTransitions: Record<EventsPartitionsProfileState, EventsPartitionsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsProfileState, to: EventsPartitionsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsProfileState, to: EventsPartitionsProfileState): EventsPartitionsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
