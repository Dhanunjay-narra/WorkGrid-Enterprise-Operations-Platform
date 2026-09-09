export type ObsSpansTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansTaskStateMachine {
  private allowedTransitions: Record<ObsSpansTaskState, ObsSpansTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansTaskState, to: ObsSpansTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansTaskState, to: ObsSpansTaskState): ObsSpansTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansTask: " + from + " -> " + to);
    }
    return to;
  }
}
