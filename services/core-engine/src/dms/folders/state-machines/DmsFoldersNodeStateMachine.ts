export type DmsFoldersNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersNodeStateMachine {
  private allowedTransitions: Record<DmsFoldersNodeState, DmsFoldersNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersNodeState, to: DmsFoldersNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersNodeState, to: DmsFoldersNodeState): DmsFoldersNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersNode: " + from + " -> " + to);
    }
    return to;
  }
}
