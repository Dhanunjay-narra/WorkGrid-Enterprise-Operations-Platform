export type ProjectRisksSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksSnapshotStateMachine {
  private allowedTransitions: Record<ProjectRisksSnapshotState, ProjectRisksSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksSnapshotState, to: ProjectRisksSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksSnapshotState, to: ProjectRisksSnapshotState): ProjectRisksSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
