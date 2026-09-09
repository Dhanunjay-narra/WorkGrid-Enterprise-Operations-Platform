export type ObsProfilingSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingSummaryStateMachine {
  private allowedTransitions: Record<ObsProfilingSummaryState, ObsProfilingSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingSummaryState, to: ObsProfilingSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingSummaryState, to: ObsProfilingSummaryState): ObsProfilingSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingSummary: " + from + " -> " + to);
    }
    return to;
  }
}
