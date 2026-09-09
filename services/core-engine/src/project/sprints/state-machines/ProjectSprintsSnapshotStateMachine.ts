export type ProjectSprintsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsSnapshotStateMachine {
  private allowedTransitions: Record<ProjectSprintsSnapshotState, ProjectSprintsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsSnapshotState, to: ProjectSprintsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsSnapshotState, to: ProjectSprintsSnapshotState): ProjectSprintsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
