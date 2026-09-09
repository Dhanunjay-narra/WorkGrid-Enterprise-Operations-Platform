export type DmsChunksProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksProfileStateMachine {
  private allowedTransitions: Record<DmsChunksProfileState, DmsChunksProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksProfileState, to: DmsChunksProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksProfileState, to: DmsChunksProfileState): DmsChunksProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksProfile: " + from + " -> " + to);
    }
    return to;
  }
}
