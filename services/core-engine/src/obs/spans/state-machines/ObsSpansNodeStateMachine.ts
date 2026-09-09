export type ObsSpansNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansNodeStateMachine {
  private allowedTransitions: Record<ObsSpansNodeState, ObsSpansNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansNodeState, to: ObsSpansNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansNodeState, to: ObsSpansNodeState): ObsSpansNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansNode: " + from + " -> " + to);
    }
    return to;
  }
}
