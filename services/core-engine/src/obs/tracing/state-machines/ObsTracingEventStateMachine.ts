export type ObsTracingEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingEventStateMachine {
  private allowedTransitions: Record<ObsTracingEventState, ObsTracingEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingEventState, to: ObsTracingEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingEventState, to: ObsTracingEventState): ObsTracingEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingEvent: " + from + " -> " + to);
    }
    return to;
  }
}
