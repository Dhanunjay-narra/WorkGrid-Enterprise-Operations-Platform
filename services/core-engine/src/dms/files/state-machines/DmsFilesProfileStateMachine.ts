export type DmsFilesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesProfileStateMachine {
  private allowedTransitions: Record<DmsFilesProfileState, DmsFilesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesProfileState, to: DmsFilesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesProfileState, to: DmsFilesProfileState): DmsFilesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
